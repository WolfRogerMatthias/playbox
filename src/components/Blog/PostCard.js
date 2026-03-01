import React from 'react';
import { useTheme } from '@mui/material';
import { blogStyles } from 'styles';

function PostCard( { post, onClick } ) {
  const theme = useTheme();
  const styles = blogStyles(theme);

  const handleMouseEnter = ( e ) => {
    e.currentTarget.style.transform = 'translateY(-4px)';
    e.currentTarget.style.boxShadow = theme.palette.shadows.cardHover;
  };

  const handleMouseLeave = ( e ) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = theme.palette.shadows.card;
  };

  return (
    <div
      style={styles.card}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={styles.cardTitle}>{post.title}</p>
      <p style={styles.cardExcerpt}>{post.excerpt}</p>
      <div style={styles.cardMeta}>
        <span style={styles.cardDate}>
          {new Date(post.date).toLocaleDateString('de-CH', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <div style={styles.tagRow}>
          {post.tags.map(( tag ) => (
            <span key={tag} style={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
