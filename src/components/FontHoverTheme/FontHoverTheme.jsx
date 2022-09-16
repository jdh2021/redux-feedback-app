import { createTheme } from '@mui/material/styles';

const FontHoverTheme = createTheme({
    typography: {
        fontFamily: ['Lekton', 'sans serif'].join(',')
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            }
        },
        MuiButton: {
          styleOverrides: {
            root: {
              '&:hover': {
                backgroundColor: "transparent",
                opacity: 0.5,
              },
            },
          },
        },
        MuiSlider: {
            styleOverrides: {
              thumb: {
                '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                  boxShadow: '0 0 0 8px rgba(158, 47, 40, 0.16)'
                },
            },
          },
      },
    }
});

export default FontHoverTheme;
