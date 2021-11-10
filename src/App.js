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
               padding: '0 165px',
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
