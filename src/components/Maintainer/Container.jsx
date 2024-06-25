import React from 'react'
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CustomTab from './Tab';
import FormExample from './Form';

const CustomContainer = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="xl" sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <Box sx={{ borderRadius: '10px',bgcolor: "#ab0033", height: "80vh", width: "100%" }} >
          <CustomTab />
          <FormExample />
        </Box>
      </Container>
    </div>
  )
}

export default CustomContainer