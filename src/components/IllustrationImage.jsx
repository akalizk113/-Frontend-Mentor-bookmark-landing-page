import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const IllustrationImage = ({ src, width, height, position = 'right' }) => {
   return (
      <Box
         sx={{
            width: width + 'px',
            height: height + 'px',
            position: 'relative',
            '&:before': {
               content: `""`,
               position: 'absolute',
               inset: 0,
               backgroundImage: `url(${src})`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               zIndex: 1,
            },
            '&:after': {
               content: `""`,
               position: 'absolute',
               top: '20%',
               [position]: '-20%',
               width: '100%',
               height: '100%',
               backgroundColor: 'hsl(231, 69%, 60%)',
               borderBottomRightRadius: position === 'left' ? '30%' : 0,
               borderBottomLeftRadius: position === 'right' ? '30%' : 0,
            },
            m: {
               xs: '0 auto',
               xl: 'unset',
            },
            '@media screen and (min-width: 375px) and (max-width: 600px)': {
               width: '100%',
               height: '210px',
            },
         }}
      />
   );
};

IllustrationImage.propTypes = {
   src: PropTypes.string.isRequired,
   width: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
};

export default IllustrationImage;
