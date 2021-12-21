import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            contained: {
                fontSize: '0.875rem'
            },
        },
      },
    },
  });