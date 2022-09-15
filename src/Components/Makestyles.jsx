import React from 'react'
import {Box,Button,Slider} from '@mui/material'
import { styled } from '@mui/material/styles';

const CustomizedButton = styled(Button)`
  color: red;
  background:green;

  :hover {
    color: #2e8b57;
    background:orangered;
  }
`;
function Makestyles() {
    return (
    <Box>
        <CustomizedButton variant='outlined' >Submit</CustomizedButton>
    </Box>
  )
}

export default Makestyles
