import React from 'react';
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { topbarStyles } from 'styles';
import { APP_ROUTES } from 'components/routes';

const TopBar = ( { toggleTheme } ) => {
  const theme = useTheme();
  const styles = topbarStyles(theme);
  const navigate = useNavigate();

  return (
    <div style={styles.bar}>
      {APP_ROUTES.filter(route => route.showInMenu).map(route => (
        <button
          key={route.path}
          style={styles.btn}
          onClick={() => navigate(route.path === '' ? '/' : route.path)}
        >
          {route.label}
        </button>
      ))}
      <button style={styles.btn} onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default TopBar;