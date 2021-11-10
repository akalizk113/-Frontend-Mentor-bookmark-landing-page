import { Grid, Button, Typography } from '@mui/material';
import { IllustrationImage } from '..';
import { illustrationHero } from '../../assets/resources';

const Slider = () => {
   return (
      <Grid
         container
         columnSpacing="120px"
         sx={{
            marginTop: '110px',
         }}
      >
         <Grid item xl={6}>
            <Typography
               variant="h3"
               fontWeight="500"
               fontSize="2.4rem"
               gutterBottom
            >
               A Simple Bookmark Manager
            </Typography>
            <Typography paragraph fontSize="18px" color="hsl(229, 8%, 60%)">
               A clean and simple interface to organize your favourite websites.
               Open a new browser tab and see your sites load instantly. Try it
               for free.
            </Typography>

            <div
               style={{
                  marginTop: 32,
               }}
            >
               <Button variant="custom" size="large">
                  Get it on Chrome
               </Button>
               <Button
                  variant="custom"
                  color="gray"
                  size="large"
                  sx={{ marginLeft: '16px' }}
               >
                  Get it on Firefox
               </Button>
            </div>
         </Grid>
         <Grid
            item
            xl={6}
            sx={{
               position: 'relative',
            }}
         >
            <IllustrationImage
               src={illustrationHero}
               width={580}
               height={380}
            ></IllustrationImage>
         </Grid>
      </Grid>
   );
};

export default Slider;
