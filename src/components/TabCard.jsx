import { Grid, Typography, Button } from '@mui/material';
import IllustrationImage from './IllustrationImage';
const TabCard = ({ imgSrc, title, desc }) => {
   return (
      <>
         <Grid item xl={6}>
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
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
            }}
         >
            <Typography variant="title" component="h5">
               {title}
            </Typography>
            <Typography variant="desc" component="h5">
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
