import { Grid, Button, Typography, Box } from '@mui/material';
import { bgDotSvg } from '../assets/resources';
import PropTypes from 'prop-types';
const ExtensionCard = (props) => {
   const { imgSrc, title, desc, alignSelf = 'unset' } = props;
   return (
      <Grid
         item
         xl={4}
         sx={{
            height: '370px',
            alignSelf: { alignSelf },
         }}
      >
         <Box
            sx={{
               position: 'relative',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center',
               p: '24px',
               boxShadow:
                  '-3px 3px 5px 3px rgba( 0 0 0 / 0.05), 3px 3px 5px 3px rgba( 0 0 0 / 0.05)',
               borderRadius: '10px',
               height: '100%',
               boxSizing: 'border-box',
            }}
         >
            <img
               src={imgSrc}
               alt={title}
               width="100"
               style={{ objectFit: 'contain', marginTop: '24px' }}
            />
            <Typography variant="h6" sx={{ mt: '30px' }}>
               {title}
            </Typography>
            <Typography
               variant="body1"
               sx={{
                  mt: '16px',
                  mb: '32px',
                  color: 'hsl(229, 8%, 60%)',
                  fontSize: '16px',
               }}
            >
               {desc}
            </Typography>
            <Box
               sx={{
                  position: 'absolute',
                  bottom: '90px',
                  width: '100%',
                  height: '10px',
                  backgroundImage: `url('${bgDotSvg}')`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
               }}
            ></Box>
            <Button variant="custom" sx={{ mt: 'auto' }}>
               Add & Install Extension
            </Button>
         </Box>
      </Grid>
   );
};

ExtensionCard.propTypes = {
   imgSrc: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired,
};

export default ExtensionCard;
