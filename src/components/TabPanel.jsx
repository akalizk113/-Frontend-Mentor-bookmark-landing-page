import { Box } from '@mui/material';
import PropTypes from 'prop-types';
const TabPanel = (props) => {
   const { children, value, index, ...other } = props;

   return (
      <div
         role="tabpanel"
         hidden={value !== index}
         id={`tabpanel-${index}`}
         aria-labelledby={`tab-${index}`}
         {...other}
      >
         {value === index && <Box sx={{ pt: '70px' }}>{children}</Box>}
      </div>
   );
};

export default TabPanel;

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired,
};
