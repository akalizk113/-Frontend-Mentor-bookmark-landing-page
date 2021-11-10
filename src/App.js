import { ThemeProvider, Container } from '@mui/material';

import theme from './mui-custom/theme';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <Container
            maxWidth="xl"
            sx={{
               padding: {
                  xs: '0 32px',
                  sm: '0 32px',
                  md: '0 64px',
                  lg: '0 165px',
               },
               overflow: {
                  xs: 'hidden',
                  sm: 'unset',
               },
            }}
         >
            <Header />
            <Content />
            <Footer />
         </Container>
      </ThemeProvider>
   );
}

export default App;
