import { Grid, Button, Typography } from '@mui/material';
import { IllustrationImage } from '..';
import { illustrationHero } from '../../assets/resources';

const Slider = () => {
   return (
      <Grid
         container
         columnSpacing={{ xl: '120px' }}
         sx={{
            mt: {
               xs: '84px',
               sm: '110px',
               md: '110px',
               lg: '110px',
               xl: '110px',
            },
         }}
      >
         <Grid
            item
            lg={6}
            xs={12}
            sx={{
               order: {
                  xs: 1,
                  lg: 'unset',
               },
               textAlign: {
                  xs: 'center',
                  lg: 'unset',
               },
               mt: {
                  xs: '104px',
                  sm: '160px',
                  lg: '0',
               },
            }}
         >
            <Typography
               variant="h3"
               fontWeight="500"
               fontSize={{
                  xs: '1.6rem',
                  sm: '2.4rem',
               }}
               gutterBottom
               mt={{ lg: '76px' }}
            >
               A Simple Bookmark Manager
            </Typography>
            <Typography
               paragraph
               fontSize={{
                  xs: '0.8rem',
                  sm: '1rem',
               }}
               color="hsl(229, 8%, 60%)"
            >
               A clean and simple interface to organize your favourite websites.
               Open a new browser tab and see your sites load instantly. Try it
               for free.
            </Typography>

            <div
               style={{
                  marginTop: 32,
               }}
            >
               <Button
                  variant="custom"
                  size="large"
                  sx={{
                     '@media screen and (min-width: 375px) and (max-width: 600px)':
                        {
                           fontSize: '12px',
                           padding: '8px 16px',
                        },
                  }}
               >
                  Get it on Chrome
               </Button>
               <Button
                  variant="custom"
                  color="gray"
                  size="large"
                  sx={{
                     marginLeft: '16px',
                     '@media screen and (min-width: 375px) and (max-width: 600px)':
                        {
                           fontSize: '12px',
                           padding: '8px 16px',
                        },
                  }}
               >
                  Get it on Firefox
               </Button>
            </div>
         </Grid>
         <Grid
            item
            lg={6}
            xs={12}
            sx={{
               position: 'relative',
               order: {
                  xs: 0,
                  lg: 'unset',
               },
               textAlign: {
                  xs: 'center',
                  lg: 'unset',
               },
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
