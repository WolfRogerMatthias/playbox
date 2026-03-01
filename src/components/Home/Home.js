import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import matter from 'gray-matter';
import { homeStyles } from 'styles';
import { posts as postsList } from 'posts.js';

function Home() {
    const theme = useTheme();
    const styles = homeStyles(theme);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const loadedPosts = await Promise.all(
                postsList.map(async (postItem) => {
                    const response = await fetch(postItem.fileUrl);
                    const text = await response.text();
                    const { data, content } = matter(text); // Grab 'content' here!

                    // 1. Get everything before the first "## "
                    let autoExcerpt = content.split(/^##\s/m)[0];
                    // 2. Remove any "# Heading 1" from the text if it exists
                    autoExcerpt = autoExcerpt.replace(/^#\s+.*/m, '').trim();

                    return {
                        ...postItem,
                        ...data,
                        excerpt: autoExcerpt, // Override the frontmatter excerpt
                    };
                })
            );

            // Sort posts by date, newest first
            const uniquePosts = Array.from(
                new Map(loadedPosts.map((post) => [post.slug, post])).values()
            );
            uniquePosts.sort((a, b) => new Date(b.date) - new Date(a.date));

            setPosts(uniquePosts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div style={styles.container}>
                <p style={{ color: theme.palette.text.primary }}>Loading latest posts...</p>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.list}>
                {posts.map((post) => (
                    <div
                        key={post.slug}
                        style={styles.listItem}
                        onClick={() => navigate(`/blog/${post.slug}`, { state: { from: '/' } })}
                    >
                        <div style={styles.leftCol}>
                            <div style={styles.date}>
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                })}
                            </div>
                            <div style={styles.tagCol}>
                                {post.tags && post.tags.map((tag) => (
                                    <span key={tag} style={styles.sideTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={styles.mainCol}>
                            <h2 style={styles.title}>{post.title}</h2>
                            {/* The excerpt is now the raw text from the markdown body */}
                            <p style={styles.excerpt}>{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;