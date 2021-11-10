import {
   Box,
   Button,
   Typography,
   Accordion,
   AccordionSummary,
   AccordionDetails,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Accordions = () => {
   return (
      <>
         <Box
            sx={{ m: '160px auto 0', textAlign: 'center', maxWidth: '540px' }}
         >
            <Typography variant="title" component="h5">
               Frequently Asked Questions
            </Typography>
            <Typography
               variant="desc"
               component="p"
               sx={{
                  marginRight: 'auto',
                  marginLeft: 'auto',
                  marginBottom: '64px',
                  textAlign: 'center',
               }}
            >
               Here are some of our FAQs. If you have any other questions you’d
               like answered please feel free to email us.
            </Typography>
            <Box
               sx={{
                  mt: '60px',
                  borderTop: '1px solid #dfdfdf',
                  borderBottom: '1px solid #dfdfdf',
               }}
            >
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel1a-content"
                     id="panel1a-header"
                  >
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        What is Bookmark?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel2a-content"
                     id="panel2a-header"
                  >
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        How can I request a new browser?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        Vivamus luctus eros aliquet convallis ultricies. Mauris
                        augue massa, ultricies non ligula. Suspendisse
                        imperdiet. Vivamus luctus eros aliquet convallis
                        ultricies. Mauris augue massa, ultricies non ligula.
                        Suspendisse imperdie tVivamus luctus eros aliquet
                        convallis ultricies. Mauris augue massa, ultricies non
                        ligula. Suspendisse imperdiet.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel3a-content"
                     id="panel3a-header"
                  >
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        Is there a mobile app?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        Sed consectetur quam id neque fermentum accumsan.
                        Praesent luctus vestibulum dolor, ut condimentum urna
                        vulputate eget. Cras in ligula quis est pharetra mattis
                        sit amet pharetra purus. Sed sollicitudin ex et
                        ultricies bibendum.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
               <Accordion>
                  <AccordionSummary
                     expandIcon={<ExpandMoreIcon />}
                     aria-controls="panel3a-content"
                     id="panel3a-header"
                  >
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        What about other Chromium browsers?
                     </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                     <Typography
                        sx={{
                           '@media screen and (min-width: 375px) and (max-width: 768px)':
                              {
                                 fontSize: '16px',
                                 textAlign: 'left',
                              },
                        }}
                     >
                        Integer condimentum ipsum id imperdiet finibus. Vivamus
                        in placerat mi, at euismod dui. Aliquam vitae neque eget
                        nisl gravida pellentesque non ut velit.
                     </Typography>
                  </AccordionDetails>
               </Accordion>
            </Box>
            <Button variant="custom" size="large" sx={{ mt: '54px' }}>
               More Info
            </Button>
         </Box>
      </>
   );
};

export default Accordions;
