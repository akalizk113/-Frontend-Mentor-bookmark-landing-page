import { Button, Stack } from '@mui/material';
import { styled } from '@mui/system';
import { logoBookmark } from '../assets/resources';
const MyHeader = styled('header')({
   display: 'flex',
   alignItems: 'center',
   marginTop: 48,
});

const NavItem = styled('span')({
   display: 'inline-block',
   textTransform: 'uppercase',
   fontSize: 14,
   letterSpacing: 1,
   color: 'hsl(229, 31%, 21%)',
   '&:hover': {
      cursor: 'pointer',
      color: 'hsl(0, 94%, 66%)',
   },
});

const Header = () => {
   return (
      <MyHeader>
         <img src={logoBookmark} alt="logo-bookMark" />
         <Stack
            direction="row"
            spacing={4}
            sx={{ marginLeft: 'auto', marginRight: '50px' }}
         >
            <NavItem>feature</NavItem>
            <NavItem>pricing</NavItem>
            <NavItem>contact</NavItem>
         </Stack>
         <Button
            variant="custom"
            color="secondary"
            sx={{
               textTransform: 'uppercase',
               letterSpacing: '1px',
            }}
         >
            Login
         </Button>
      </MyHeader>
   );
};

export default Header;
