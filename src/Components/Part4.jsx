import React, { useState,forwardRef } from 'react'
import {Stack, AlertTitle, Snackbar,Button} from '@mui/material'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  
function Part4() {
  
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
    return (
    <Stack spacing={3}>
        {/* Snackbar Example */}
        <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      {/* Alert Example */}
      <Alert severity='error'>This is a error Alert</Alert>
      <Alert severity='warning'>This is a Warning Alert</Alert>
      <Alert severity='success'>This is a Success Alert</Alert>
      <Alert severity='info'>This is a Info Alert</Alert>

      <Alert variant='outlined' severity='error'>This is a error Alert</Alert>
      <Alert variant='outlined' severity='warning'>This is a Warning Alert</Alert>
      <Alert variant='outlined' severity='success'>This is a Success Alert</Alert>
      <Alert variant='outlined' severity='info'>This is a Info Alert</Alert>
     
      <Alert variant='filled' severity='error'>This is a error Alert</Alert>
      <Alert variant='filled' severity='warning'>This is a Warning Alert</Alert>
      <Alert variant='filled' severity='success'>This is a Success Alert</Alert>
      <Alert variant='filled' severity='info'>This is a Info Alert</Alert>
     
      <Alert severity='error'><AlertTitle>Erorr</AlertTitle> This is a error Alert</Alert>
      <Alert severity='warning'><AlertTitle>Warning</AlertTitle> This is a Warning Alert</Alert>
      <Alert severity='success'><AlertTitle>Success</AlertTitle> This is a Success Alert</Alert>
      <Alert severity='info'><AlertTitle>Info</AlertTitle> This is a Info Alert</Alert>
    </Stack>
  )
    }
export default Part4
