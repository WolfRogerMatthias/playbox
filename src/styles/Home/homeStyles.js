export const homeStyles = (theme) => ({
  container: {
    background: theme.palette.background.default,
    minHeight: '100%',
    padding: theme.spacing(6, 3),
    maxWidth: '800px',
    margin: '0 auto',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
  },
  listItem: {
    display: 'flex',
    gap: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderBottom: `1px solid ${theme.palette.divider || '#e0e0e0'}`,
    cursor: 'pointer',
    flexWrap: 'wrap',
  },
  leftCol: {
    width: '120px',
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
  // NEW TAG STYLES:
  tagRow: {
    display: 'flex',
    gap: theme.spacing(0.75),
    flexWrap: 'wrap', // This ensures they move to the next row if there isn't enough space
  },
  tag: {
    fontSize: '0.72rem',
    fontWeight: 600,
    padding: theme.spacing(0.25, 1),
    borderRadius: '99px',
    background: theme.palette.accent.chip,
    color: theme.palette.accent.chipText,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  // END NEW TAG STYLES
  mainCol: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
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
  }
});