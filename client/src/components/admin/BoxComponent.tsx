import { Box, Typography } from '@mui/material';
import React from 'react';

type BoxComponentProps = {
  label: string;
  value: string;
};

const BoxComponent: React.FC<BoxComponentProps> = ({ label, value }) => (
  <Box
    sx={{
      border: '1px solid #80808045',
      backgroundColor: 'white',
      width: '150px',
      height: '90px',
      padding: '20px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Typography
      fontFamily="Mulish"
      fontWeight="bold"
      paragraph
      marginBottom="0px"
      fontSize="1.2rem"
      sx={{ color: 'grey' }}
    >
      {label}
    </Typography>
    <Typography
      fontFamily="Mulish"
      fontWeight="bold"
      paragraph
      marginBottom="0px"
      fontSize="1.5rem"
      sx={{ color: 'grey' }}
      marginTop="20px"
    >
      {value}
    </Typography>
  </Box>
);

export default BoxComponent;