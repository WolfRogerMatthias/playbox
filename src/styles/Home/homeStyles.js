export const homeStyles = ( theme ) => ({
  container: {
    background: theme.palette.background.default,
    minHeight: '100%',
    padding: theme.spacing(6, 3),
    maxWidth: '800px', // Keeps the reading width comfortable
    margin: '0 auto',
  },
  pageTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: theme.spacing(4),
    color: theme.palette.text.primary,
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6), // Space between different posts
  },
  listItem: {
    display: 'flex',
    gap: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider || '#e0e0e0'}`, // Subtle line between posts
    cursor: 'pointer',
    flexWrap: 'wrap', // Allows wrapping on very small mobile screens
  },
  leftCol: {
    width: '120px', // Fixed width for the date/tag column
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  date: {
    fontSize: '0.95rem',
    color: theme.palette.text.primary,
    fontWeight: 500,
  },
  tagCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
    alignItems: 'flex-start',
  },
  sideTag: {
    fontSize: '0.85rem',
    color: theme.palette.text.secondary,
  },
  mainCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5), // Space between title and excerpt
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: 600,
    color: theme.palette.text.primary,
    margin: 0,
    lineHeight: 1.2,
  },
  excerpt: {
    fontSize: '1rem',
    color: theme.palette.text.secondary,
    lineHeight: 1.6,
    margin: 0,
  },
});