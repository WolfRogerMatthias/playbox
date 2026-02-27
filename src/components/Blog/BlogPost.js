import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import Markdown from 'react-markdown';
import matter from 'gray-matter';
import { blogStyles } from 'styles';
import { posts } from 'posts.js';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const styles = blogStyles(theme);

  const [postData, setPostData] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const postEntry = posts.find((p) => p.slug === slug);

    if (!postEntry) {
      setError('Post not found in index.');
      setLoading(false);
      return;
    }

    fetch(postEntry.fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load post content.');
        return res.text();
      })
      .then((text) => {
        // Parse frontmatter
        const { data, content } = matter(text);
        setPostData(data);
        setContent(content);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return (
      <div style={styles.postPage}>
        <p>Loading...</p>
      </div>
    );

  if (error)
    return (
      <div style={styles.postPage}>
        <p>{error}</p>
        <button style={styles.backBtn} onClick={() => navigate('/blog')}>
          ← Back to Blog
        </button>
      </div>
    );

  return (
    <div style={styles.postPage}>
      <button style={styles.backBtn} onClick={() => navigate('/blog')}>
        ← Back to Blog
      </button>
      <h1 style={{ margin: '0 0 8px', color: theme.palette.text.primary }}>
        {postData.title}
      </h1>
      <div style={styles.postMeta}>
        <span>
          {new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
        <span>·</span>
        <div style={styles.tagRow}>
          {postData.tags &&
            postData.tags.map((tag) => (
              <span key={tag} style={styles.tag}>
                {tag}
              </span>
            ))}
        </div>
      </div>
      <div style={styles.markdownBody}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
}

export default BlogPost;
