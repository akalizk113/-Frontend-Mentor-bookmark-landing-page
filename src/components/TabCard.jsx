import { Grid, Typography, Button } from '@mui/material';
import IllustrationImage from './IllustrationImage';
const TabCard = ({ imgSrc, title, desc }) => {
   return (
      <>
         <Grid
            item
            xl={6}
            xs={12}
            sx={{
               textAlign: {
                  xs: 'center',
                  xl: 'unset',
               },
            }}
         >
            <IllustrationImage
               src={imgSrc}
               width={540}
               height={346}
               position="left"
            />
         </Grid>
         <Grid
            item
            xl={6}
            xs={12}
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: {
                  xs: 'center',
                  xl: 'unset',
               },
               mt: {
                  xs: '100px',
                  sm: '160px',
                  xl: 'unset',
               },
            }}
         >
            <Typography variant="title" component="h5">
               {title}
            </Typography>
            <Typography
               variant="desc"
               component="p"
               sx={{
                  textAlign: {
                     xs: 'center',
                     xl: 'unset',
                  },
               }}
            >
               {desc}
            </Typography>
            <Button
               variant="custom"
               size="large"
               sx={{
                  mt: '36px',
                  maxWidth: 'fit-content',
               }}
            >
               more info
            </Button>
         </Grid>
      </>
   );
};

export default TabCard;
