import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import matter from 'gray-matter';
import { blogStyles } from 'styles';
import { posts as postsList } from 'posts.js';
import PostCard from './PostCard';

function Blog() {
    const theme = useTheme();
    const styles = blogStyles(theme);
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const loadedPosts = await Promise.all(
                postsList.map(async (postItem) => {
                    const response = await fetch(postItem.fileUrl);
                    const text = await response.text();
                    const { data, content } = matter(text); // Grab 'content'

                    // Generate auto-excerpt
                    let autoExcerpt = content.split(/^##\s/m)[0];
                    autoExcerpt = autoExcerpt.replace(/^#\s+.*/m, '').trim();

                    return {
                        ...postItem,
                        ...data,
                        excerpt: autoExcerpt, // Override frontmatter excerpt
                    };
                }),
            );

            const uniquePosts = Array.from(
                new Map(loadedPosts.map((post) => [post.slug, post])).values(),
            );
            uniquePosts.sort((a, b) => new Date(b.date) - new Date(a.date));

            setPosts(uniquePosts);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div style={styles.page}>
                <h1 style={styles.pageTitle}>Blog</h1>
                <p style={{ color: theme.palette.text.primary }}>Loading posts...</p>
            </div>
        );
    }

    return (
        <div style={styles.page}>
            <h1 style={styles.pageTitle}>Blog</h1>
            <div style={styles.grid}>
                {posts.map((post) => (
                    <PostCard
                        key={post.slug}
                        post={post}
                        onClick={() => navigate(`/blog/${post.slug}`, { state: { from: '/blog' } })}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog;