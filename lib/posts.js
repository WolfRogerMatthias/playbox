import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

function getFilesRecursively(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(getFilesRecursively(file));
        } else {
            /* Is a file */
            if (file.endsWith('.md')) {
                results.push(file);
            }
        }
    });
    return results;
}

export function getSortedPostsData() {
    // Get file names under /posts recursively
    const filePaths = getFilesRecursively(postsDirectory);
    const allPostsData = filePaths.map((filePath) => {
        // Remove ".md" from file name and get relative path for id
        const relativePath = path.relative(postsDirectory, filePath);
        const id = relativePath.replace(/\.md$/, '').split(path.sep).join('/');

        // Read markdown file as string
        const fileContents = fs.readFileSync(filePath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    const filePaths = getFilesRecursively(postsDirectory);
    return filePaths.map((filePath) => {
        const relativePath = path.relative(postsDirectory, filePath);
        const slug = relativePath.replace(/\.md$/, '').split(path.sep);
        return {
            params: {
                slug: slug,
            },
        };
    });
}

export async function getPostData(slug) {
    // slug is an array of path segments
    const relativePath = slug.join(path.sep);
    const fullPath = path.join(postsDirectory, `${relativePath}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
        id: slug.join('/'),
        content: matterResult.content,
        ...matterResult.data,
    };
}
