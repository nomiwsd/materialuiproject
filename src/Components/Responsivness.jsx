import React from 'react'
import {Box} from '@mui/material'
function Responsivness() {
  return (
    <Box sx={{height:'300px',
        width:{
            xs:100,  //// applies when viewport width is above Zero
            sm:200,  //// applies when viewport width is above 600 or equal
            md:300, //// applies when viewport width is above 900 or equal
            lg:400, //// applies when viewport width is above 1200 or equal
            xl:500, //// applies when viewport width is above 1536 or equal
        },bgcolor:'secondary.main'}}>

        </Box>
  )
}

export default Responsivness