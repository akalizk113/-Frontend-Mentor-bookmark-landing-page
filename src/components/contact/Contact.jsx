import { Button, Typography, Box, Input, FormHelperText } from '@mui/material';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import { isEmail } from 'validator';
import ErrorIcon from '@mui/icons-material/Error';
import { useRef, useState } from 'react';

function MyFormHelperText({ message }) {
   const { focused } = useFormControl() || {};

   return (
      <Box hidden={focused || !message}>
         <ErrorIcon
            sx={{
               position: 'absolute',
               top: '12px',
               right: '15px',
               zIndex: 2,
               color: 'hsl(0, 94%, 66%)',
            }}
         />
         <Box
            sx={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: '-24px',
               display: 'flex',
               flexDirection: 'column-reverse',
               fontSize: '14px',
               fontWeight: '500',
               textAlign: 'left',
               backgroundColor: 'hsl(0, 94%, 66%)',
               color: 'rgba(255 255 255/ 0.7)',
               zIndex: 0,
               borderRadius: '6px',
               pl: '16px',
               pb: '4px',
            }}
         >
            {message}
         </Box>
      </Box>
   );
}

const Contact = () => {
   const inputRef = useRef();
   const [message, setMessage] = useState(``);
   const handleSubmit = (e) => {
      e.preventDefault();
      if (isEmail(inputRef.current.firstElementChild.value)) {
         setMessage('');
      } else {
         setMessage("Whoops, make sure it's an email");
      }
   };

   return (
      <Box
         sx={{
            m: {
               xs: '100px -24px 0',
               sm: '100px -32px 0',
               md: '100px -64px 0',
               lg: '160px -165px 0',
            },
            height: '360px',
            bgcolor: 'hsl(231, 69%, 60%)',
            textAlign: 'center',
         }}
      >
         <Box sx={{ width: '445px', m: '0 auto', pt: '64px' }}>
            <Typography
               variant="subtitle2"
               color="white"
               sx={{
                  fontWeight: 500,
                  letterSpacing: '5px',
                  textTransform: 'uppercase',
                  mb: '36px',
               }}
            >
               35,000+ already joined
            </Typography>
            <Typography
               variant="h5"
               fontWeight="500"
               fontSize="1.6rem"
               color="white"
            >
               Stay up-to-date with what we’re doing
            </Typography>
            <Box
               component="form"
               onSubmit={handleSubmit}
               noValidate
               autoComplete="off"
               sx={{
                  display: 'flex',
                  mt: '32px',
               }}
            >
               <FormControl
                  sx={{
                     flex: 1,
                     mr: '16px',
                     display: 'flex',
                     p: '2px',
                     position: 'relative',
                  }}
               >
                  <Input
                     ref={inputRef}
                     placeholder="Enter your email address"
                     sx={{
                        flex: 1,
                        bgcolor: 'white',
                        fontSize: '16px',
                        borderRadius: '6px',
                        border: 'none',
                        outline: 'none',
                        padding: '0 24px',
                        overflow: 'hidden',
                        zIndex: 1,
                        '&:placehoder': {
                           color: '#dadadc',
                        },
                        '&:before, &:after': {
                           display: 'none',
                        },
                     }}
                  />
                  <MyFormHelperText message={message} />
               </FormControl>
               <Button
                  variant="custom"
                  color="secondary"
                  size="large"
                  type="submit"
                  sx={{ ml: 'auto' }}
               >
                  Contact Us
               </Button>
            </Box>
         </Box>
      </Box>
   );
};

export default Contact;
