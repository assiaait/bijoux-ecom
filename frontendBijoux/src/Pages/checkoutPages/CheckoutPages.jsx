import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Checkout from './Checkout';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CheckoutPages() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <main>
        <Box sx={{ width: '100%' }}>
          <Box
            className='mb-5'
            sx={{ borderBottom: 0 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                label="Shopping Cart(2)"
                style={{
                  color: '#868686',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                {...a11yProps(0)}
              />
              <Tab
                label="Checkout"
                style={{
                  color: '#868686',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                {...a11yProps(1)}
              />
              <Tab
                label="Order Tracking"
                style={{
                  color: '#868686',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel
            style={{ display: 'flex', justifyContent: 'center', textAlign: 'left' }}
            value={value}
            index={0}
          >
          
          </TabPanel>
          <TabPanel style={{ display: 'flex', justifyContent: 'center' }} value={value} index={1}>
            {/* <Checkout /> */}
          </TabPanel>
          <TabPanel style={{ display: 'flex', justifyContent: 'center' }} value={value} index={2}>
            {/* <OrderTrack /> */}
          </TabPanel>
        </Box>
      </main>
    </>
  );
}
