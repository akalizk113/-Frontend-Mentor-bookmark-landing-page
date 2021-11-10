import { createTheme } from '@mui/material/styles';

const primaryColor = 'hsl(231, 69%, 60%)';
const secondaryColor = 'hsl(0, 94%, 66%)';
const grayColor = 'hsl(229, 31%, 21%)';
const grayLishBlue = 'hsl(229, 8%, 60%)';
const theme = createTheme({
   palette: {
      primary: {
         main: primaryColor,
      },
      secondary: {
         main: secondaryColor,
      },
      gray: {
         main: grayColor,
      },
      graylish: {
         main: grayLishBlue,
      },
      typography: {
         htmlFontSize: 18,
         fontFamily: "'Rubik', sans-serif",
         color: grayColor,
      },
   },
   breakpoints: {
      values: {
         xl: 1440,
      },
   },
   components: {
      MuiButton: {
         variants: [
            {
               props: { variant: 'custom' },
               style: {
                  color: '#fff',
                  borderRadius: 6,
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                  borderWidth: 2,
                  borderStyle: 'solid',
                  fontWeight: 700,
                  fontSize: 14,
                  textTransform: 'capitalize',
                  boxShadow:
                     '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
                  padding: '8px 24px',
                  minWidth: 100,

                  ':hover': {
                     backgroundColor: 'unset',
                     color: primaryColor,
                  },
               },
            },
            {
               props: { variant: 'custom', color: 'secondary' },
               style: {
                  backgroundColor: secondaryColor,
                  borderColor: secondaryColor,
                  ':hover': {
                     color: secondaryColor,
                  },
               },
            },
            {
               props: { variant: 'custom', color: 'gray' },
               style: {
                  backgroundColor: '#f7f7f7',
                  borderColor: '#f7f7f7',
                  color: grayColor,
                  ':hover': {
                     borderColor: grayColor,
                     color: grayColor,
                  },
               },
            },
            {
               props: { variant: 'custom', size: 'large' },
               style: {
                  padding: '11px 30px',
               },
            },
         ],
      },
      MuiTypography: {
         styleOverrides: {
            root: {
               fontFamily: "'Rubik', sans-serif",
               // color: grayColor,
            },
         },
         variants: [
            {
               props: { variant: 'title' },
               style: {
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  color: grayColor,
                  marginBottom: '32px',
               },
            },
            {
               props: { variant: 'desc' },
               style: {
                  color: grayLishBlue,
                  fontFamily: "'Rubik', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 400,
                  lineHeight: 1.5,
               },
            },
         ],
      },
      MuiAccordion: {
         styleOverrides: {
            root: {
               boxShadow: 'none',
               '&.Mui-expanded': {
                  margin: '0',
               },
            },
         },
      },
      MuiAccordionSummary: {
         styleOverrides: {
            root: {
               borderBottomColor: '#dfdfdf',
               '&:hover': {
                  color: secondaryColor,
               },
            },
            '&-expandIconWrapper': {
               color: secondaryColor,
            },
            expandIconWrapper: {
               color: primaryColor,
               '&.Mui-expanded': {
                  color: secondaryColor,
               },
            },
         },
      },
      MuiAccordionDetails: {
         styleOverrides: {
            root: {
               textAlign: 'left',
               color: grayLishBlue,
               fontSize: '16px',
               padding: '16px 16px 32px',
            },
         },
      },
   },
});

export default theme;
