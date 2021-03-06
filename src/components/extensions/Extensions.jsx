import { Grid, Typography, Box } from '@mui/material';

import { ExtensionCard } from '../';

import { logoChrome, logoFirefox, logoOpera } from '../../assets/resources';

const Extensions = () => {
   return (
      <>
         <Box
            sx={{
               m: {
                  xs: '160px auto 0',
                  lg: '240px auto 0',
               },
               textAlign: 'center',
            }}
         >
            <Typography variant="title" component="h5">
               Download the extension
            </Typography>
            <Typography
               variant="desc"
               component="p"
               sx={{
                  maxWidth: '540px',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginBottom: '64px',
                  textAlign: 'center',
               }}
            >
               We’ve got more browsers in the pipeline. Please do let us know if
               you’ve got a favourite you’d like us to prioritize.
            </Typography>
         </Box>
         <Box
            sx={{
               width: {
                  xs: '100%',
                  sm: '620px',
                  md: '620px',
                  lg: '910px',
               },
               m: '0 auto',
            }}
         >
            <Grid
               container
               sx={{
                  height: {
                     xs: 'unset',
                     lg: '450px',
                  },
               }}
               columnSpacing="36px"
               rowSpacing={{ xs: '36px', xl: 'unset' }}
            >
               <ExtensionCard
                  imgSrc={logoChrome}
                  title="Add to Chrome"
                  desc="Minimum version 62"
               />
               <ExtensionCard
                  imgSrc={logoFirefox}
                  title="Add to Firefox"
                  desc="Minimum version 55"
                  alignSelf="center"
               />
               <ExtensionCard
                  imgSrc={logoOpera}
                  title="Add to Opera"
                  desc="Minimum version 46"
                  alignSelf="flex-end"
               />
            </Grid>
         </Box>
      </>
   );
};

export default Extensions;
