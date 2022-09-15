import React from 'react'
import {Dialog,Button,Box,Stack,DialogTitle, DialogContent, DialogContentText, DialogActions, CircularProgress, LinearProgress, Skeleton} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
import {useState} from 'react'
function Part5() {
    const [open,setOpen]=useState(false)
    // const [loading,setLoading]=useState(true)
    return (
    <Stack spacing={3}>
        {/*After installing npm add @mui/lab Loading Button Example */}
        <Stack spacing={3} direction='row'>
        
        <LoadingButton variant='outlined' >Submit</LoadingButton>
        <LoadingButton variant='outlined' loading>Submit</LoadingButton>
        <LoadingButton variant='outlined' loading loadingIndicator='loading...'>Fetch data</LoadingButton>
        <LoadingButton loading variant='outlined' startIcon={<SaveIcon/>} loadingPosition='start'>Save</LoadingButton>
        </Stack>
        {/* Simple Skeleton Example */}
        <Box sx={{width:'250px'}}>
            <Skeleton/>
            <Skeleton variant='circular' width={40} height={40}/>
            <Skeleton variant='rectangular' width={150} height={120}/>

            <Skeleton  animation='wave' varinat='text' />
            <Skeleton variant='circular'  animation='wave' width={40} height={40}/>
            <Skeleton variant='rectangular'  animation='wave' width={150} height={120}/>

        </Box>
        {/* Progress Bar Example  */}
        <Box>
            <CircularProgress/>
            <CircularProgress variant='determinate' value={70}/>
            
            <LinearProgress />
        </Box>
        {/* Dialog Box Example */}
      <Box>
        <Button onClick={()=> setOpen(true)}>
            Open Dialog Box
        </Button>
        <Dialog
        onClose={()=>setOpen(false)}
        open={open}
        aria-labelledby='dialog-title'
        aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Submit The Test?</DialogTitle>
            <DialogContent id='dialog-description'>
                <DialogContentText>Are You Sure You Want to submit the test.You Will Not Be able to edit after submitting the test?</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=> setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={()=> setOpen(false)}>Submit</Button>
            </DialogActions>
        </Dialog>
      </Box>
    </Stack>
  )
}

export default Part5
