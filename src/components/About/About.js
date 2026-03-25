import React from 'react';
import { useTheme } from '@mui/material';
import { aboutStyles } from 'styles';

function About() {
  const theme = useTheme();
  const styles = aboutStyles(theme);

  const cvItems = [
    {

      category: 'Experience',
      items: [
        {
          title: 'Arbeiten als Full Stack Developer',
          subtitle: 'NeuroInformatik Bern Inselspital',
          period: 'Febrauar 2026 - ...',
          description: 'Full Stack Development im web für Medical-blocks.ch'
        },
        {
          title: 'Praktikum Full Stack Developer',
          subtitle: 'NeuroInformatik Bern Inselspital',
          period: 'August 2024 to Dezember 2025',
          description: 'Im Praktikum bei der NeuroInformatik konnte ich lernen einen DICOM Viewer im web zu entwicklen'
        },
      ]
    },
    {
      category: 'Education',
      items: [
        {
          title: 'Bachelor of Science in Computer Science',
          subtitle: 'University of Bern',
          period: 'HS21 - HS2025',
          description: 'Major in Computer Science, Minor in Mathematik, Digitalization and Applied Data Science, Wirtschaftsinformatik'
        },
      ]
    }
  ];

  const socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/WolfRogerMatthias',
      icon: '🐙',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/roger-wolf-83623b23b',
      icon: '💼',
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.heroContainer}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Roger Wolf</h1>
          <p style={styles.heroSubtitle}>Full Stack Developer | Passionate about Web Development</p>
          
          <div style={styles.bioSection}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.bioText}>
              Roger
            </p>
          </div>
        </div>

        <div style={styles.profileImageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Roger Wolf"
            style={styles.profileImage}
            onError={(e) => {
              console.error('Image failed to load:', e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      <div style={styles.cvSection}>
        <h2 style={styles.sectionTitle}>Professional Background</h2>
        {cvItems.map((section) => (
          <div key={section.category} style={styles.cvCategory}>
            <h3 style={styles.cvCategoryTitle}>{section.category}</h3>
            {section.items.map((item, idx) => (
              <div key={idx} style={styles.cvItem}>
                <div style={styles.cvItemHeader}>
                  <h4 style={styles.cvItemTitle}>{item.title}</h4>
                  <span style={styles.cvItemPeriod}>{item.period}</span>
                </div>
                <p style={styles.cvItemSubtitle}>{item.subtitle}</p>
                <p style={styles.cvItemDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.socialSection}>
        <h2 style={styles.sectionTitle}>Connect With Me</h2>
        <div style={styles.socialLinksContainer}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = theme.palette.shadows.cardHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = theme.palette.shadows.card;
              }}
            >
              <span style={styles.socialIcon}>{link.icon}</span>
              <span style={styles.socialLabel}>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

