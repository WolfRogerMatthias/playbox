import { createTheme } from '@mui/material/styles';

const warmLight = {
  background: {
    default: '#faf7f2',
    card: '#fffbf5',
    topBar: 'linear-gradient(135deg, #e8d5b7 0%, #c9a06a 100%)',
  },
  accent: {
    main: '#c4704b',
    chip: '#f0e6d6',
    chipText: '#8b4513',
  },
  shadows: {
    card: '0 2px 12px rgba(180, 120, 60, 0.08)',
    cardHover: '0 8px 24px rgba(180, 120, 60, 0.18)',
  },
};

const warmDark = {
  background: {
    default: '#1c1814',
    card: '#2a2118',
    topBar: 'linear-gradient(135deg, #2e2010 0%, #4a3020 100%)',
  },
  accent: {
    main: '#d4836a',
    chip: '#3d2d1e',
    chipText: '#d4a07a',
  },
  shadows: {
    card: '0 2px 12px rgba(0, 0, 0, 0.4)',
    cardHover: '0 8px 28px rgba(0, 0, 0, 0.6)',
  },
};

export const getAppTheme = (mode) => {
  const tokens = mode === 'light' ? warmLight : warmDark;
  return createTheme({
    palette: {
      mode,
      background: tokens.background,
      accent: tokens.accent,
      shadows: tokens.shadows,
    },
  });
};
