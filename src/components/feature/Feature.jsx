import { Grid, Typography, Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';
import { useState } from 'react';

import { TabCard, TabPanel } from '../';

import {
   illustrationTab1,
   illustrationTab2,
   illustrationTab3,
} from '../../assets/resources';

const StyledTabs = styled((props) => (
   <Tabs
      {...props}
      TabIndicatorProps={{
         children: <span className="MuiTabs-indicatorSpan" />,
      }}
   />
))(({ theme }) => ({
   width: '100%',
   borderBottom: '1px solid #e0e0ec',
   '& .MuiTabs-indicator': {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
   },
   '& .MuiTabs-indicatorSpan': {
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
   },
}));

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
   ({ theme }) => ({
      textTransform: 'none',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      fontFamily: theme.palette.typography.fontFamily,
      width: '33.3333%',
      color: theme.palette.gray.main,
      opacity: 0.7,
      '&.Mui-selected': {
         opacity: 1,
         color: theme.palette.gray.main,
      },
      '&:hover': {
         color: theme.palette.secondary.main,
      },
      '&.Mui-focusVisible': {
         backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
   })
);

function a11yProps(index) {
   return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
   };
}

const Feature = () => {
   const [tabValue, setTabValue] = useState(0);
   const handleChange = (event, newValue) => {
      setTabValue(newValue);
   };
   return (
      <>
         <Box
            sx={{
               width: '730px',
               marginTop: '190px',
               marginRight: 'auto',
               marginLeft: 'auto',
               textAlign: 'center',
            }}
         >
            <Typography variant="title" component="h5">
               Features
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
               Our aim is to make it quick and easy for you to access your
               favourite websites. Your bookmarks sync between your devices so
               you can access them on the go.
            </Typography>

            <StyledTabs value={tabValue} onChange={handleChange}>
               <StyledTab label="Simple Bookmarking" {...a11yProps(0)} />
               <StyledTab label="Speedy Searching" {...a11yProps(1)} />
               <StyledTab label="Easy Sharing" {...a11yProps(2)} />
            </StyledTabs>
         </Box>
         <Box>
            <TabPanel value={tabValue} index={0}>
               <Grid container columnSpacing="120px">
                  <TabCard
                     imgSrc={illustrationTab1}
                     title="Bookmark in one click"
                     desc="Organize your bookmarks however you like. Our simple drag-and-drop interface 
                     gives you complete control over how you manage your favourite sites."
                  />
               </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
               <Grid container columnSpacing="120px">
                  <TabCard
                     imgSrc={illustrationTab2}
                     title="Intelligent search"
                     desc="Our powerful search feature will help you find saved sites in no time at all. 
                     No need to trawl through all of your bookmarks."
                  />
               </Grid>
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
               <Grid container columnSpacing="120px">
                  <TabCard
                     imgSrc={illustrationTab3}
                     title="Share your bookmarks"
                     desc="Easily share your bookmarks and collections with others. Create a shareable 
                     link that you can send at the click of a button."
                  />
               </Grid>
            </TabPanel>
         </Box>
      </>
   );
};

export default Feature;
