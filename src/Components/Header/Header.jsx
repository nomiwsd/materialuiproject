import React from 'react'
import { useState } from 'react';
import {Stack,Typography,Button,ButtonGroup,ToggleButton,ToggleButtonGroup,TextField,InputAdornment,MenuItem,Radio,RadioGroup,FormLabel,FormControlLabel, FormControl,Checkbox,Box, FormGroup, Switch, Rating, Autocomplete, Grid, Paper, Card, CardContent, CardActions, CardMedia, Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { Container } from '@mui/system';
function Header() {
const [value,setvalue]  =useState ('');
const Skills=['HTML','CSS','JS','REACT']
  return (
    <Container>
       
        {/* Accordian Example */}
        <Box width="350px" my={5}>
        <Accordion>
        <AccordionSummary id='panel1' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}>
            <Typography>
                Here is the First Accordian
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptate et repellendus nulla, saepe harum quod! Incidunt, soluta nobis impedit numquam minima earum maiores deserunt, ad exercitationem dolore, fuga molestias!
        </AccordionDetails>
        </Accordion>

        </Box>
        {/* Card Example */}
        <Box width='300px' mb={5}>
            <Card>
                <CardMedia component='img'
                height='150'
                image='Men(1).jpg'
                alt='wait for internet'>
                </CardMedia>
                <CardContent>
                    <Typography variant="h6" component="div">
                        React Material UI
                    </Typography>
                    <Typography variant="body1" color='text.secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, fugit harum facilis ad nisi obcaecati! Vitae temporibus soluta exercitationem aliquam at quos, ipsa unde dicta perspiciatis expedita repellendus corrupti adipisci?</Typography>
                </CardContent>
                <CardActions>
                    <Button size='medium'>Share</Button>
                    <Button size='medium'>Show More</Button>
                </CardActions>
            </Card>
        </Box>
      {/* Paper Example */}
      <Paper sx={{padding:'32px'}} elevation={5}>

    <Stack spacing={2}>
        {/* Grid Example */}
        <Grid container my={4} rowSpacing={3} columnSpacing={2}>
            <Grid item xs={3}>
                <Box bgcolor='lightpink' p={2} >Item 1</Box>
            </Grid>
            <Grid item xs={9}>
                <Box bgcolor='lightpink' p={2} >Item 2</Box>
            </Grid>
            <Grid item xs={9}>
                <Box bgcolor='lightpink' p={2} >Item 3</Box>
            </Grid>
            <Grid item xs={3}>
                <Box bgcolor='lightpink' p={2} >Item 4</Box>
            </Grid>
        </Grid>
        {/* BOX Example */}
      <Stack sx={{
        border:'2px solid black'
      }} direction="row-reverse">  <Box component="span" sx={{
            backgroundColor:'Pink',
            color:'white',
            width:100,
            height:100,
            '&:hover':{
                backgroundColor:'orangered'
                ,color: 'blue'
            }
        }}>
            Welcome to the Pakistan
        </Box>
        <Box display='flex' width="100px" height="100px" bgcolor="darkgoldenrod"
        p={2}>

        </Box>
        </Stack>
        {/* Autocomplete Example */}
    <Stack spacing={2} width="250px">
         <Autocomplete options={Skills}
         renderInput={(parameters)=> <TextField {...parameters} label='skills'/>}/>
        </Stack>
        <Stack spacing={2} width="250px">
         <Autocomplete options={Skills}
         renderInput={(parameters)=> <TextField {...parameters} label='skills'/>}
         freeSolo/>
        </Stack>
         {/*  Ratting Example */}
         <Stack spacing={2}>
            <Rating precision={0.5}
            size="medium"/>
        </Stack>
        {/* Switch Example */}
        <Stack spacing={2}>
            <FormControlLabel label="dark mode" control={<Switch/>}/>
        </Stack>
        {/* CheckBoX Example */}
        <Stack spacing={2} direction="row">
            <FormControlLabel 
            label=' I accept the terms and conditions'
            control={<Checkbox/>}/>
            <Box>
                <Checkbox
                icon={<BookmarkBorderIcon/>}
                checkedIcon={<BookmarkIcon/>}/>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel label="HTML" value='HTML' control={<Checkbox value='HTML' />}/>
                        <FormControlLabel label="CSS" value='CSS' control={<Checkbox  value='CSS'/>}/>
                        <FormControlLabel label="JavaScript" value='Javascript' control={<Checkbox  value='JAVASCRIPT'/>}/>
                      
                    </FormGroup>
                </FormControl>
            </Box>
        </Stack>
        {/* Radiobutton Example */}
        <Stack spacing={2}>
                <FormControl>
                    <FormLabel id="job-experience-group-label">Years Of Experience</FormLabel>
                    <RadioGroup
                    name="job-experience-group"
                    aria-labelledby='job-experience-group-label'>
                        <FormControlLabel control={<Radio/>} label="0-2" value="0-2"/>
                        <FormControlLabel control={<Radio/>} label="3-5" value="3-5"/>
                        <FormControlLabel control={<Radio/>} label="6-10" value="6-10"/>
                    </RadioGroup>
                </FormControl>
        </Stack>
            {/* Select Examples */}
            <Stack spacing={2} direction="row">
                <TextField label="select country" select
                 fullWidth 
                 SelectProps={{mutiple:true}}>
                    <MenuItem value="IND">India</MenuItem>
                    <MenuItem value='PAK'>Pakistan</MenuItem>
                </TextField>
            <TextField label="Select Country" select
            fullWidth
            helperText="please select your Country">
            <MenuItem value="IND">India</MenuItem>
            <MenuItem value="US">USA</MenuItem>
            <MenuItem value="PAK">Pakistan</MenuItem>
            <MenuItem value="AUS">Australia</MenuItem>
            <MenuItem value="ENG">England</MenuItem>
            </TextField>
            
            </Stack>
            {/* input adorment example */}
        <Stack spacing={2} direction="row">
        <TextField label='Amount' variant="outlined" InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment> }}
        />
        <TextField label='Weight' variant="outlined"
        InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}}
        />
        </Stack>
        {/* textfield with validations */}
        <Stack
        spacing={2} direction="row">
        <TextField label='Name' variant="outlined" required
        onChange={e=>setvalue(e.target.value)}
        error={!value} 
        helperText={!value? 'Required': 'Do not Share your Password with anyone else'}
        value={value}/>
        <TextField label='inputform' variant="filled" InputProps={{readOnly:true}}/>
        <TextField label='Password' type="password" variant="outlined" color='secondary' helperText="Do not share your password with anyone"/>
        </Stack>
        {/* typography examples */}
       <Stack spacing={2} direction="row">
       <Typography
        variant='h6'
        component='h2'
         color="secondary"
        align='center'
        gutterBottom
        >
        create the page
        </Typography>
       </Stack>
        
        {/* Button Examples */}
        <Stack spacing={2} direction="row">
        <Button type='submit' color="secondary" variant="outlined">SUBMIT</Button>
        <ButtonGroup color="secondary" variant="outlined">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
        </ButtonGroup>
        <Button
        onClick={()=>console.log('clicked the button')} 
        type="submit"
        color="secondary"
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowRightIcon/>}
        >submit</Button>

        <Stack spacing={2} direction="row">
        <ToggleButtonGroup aria-label='text formatting'>
            <ToggleButton value="Bold" aria-label='bold'><FormatBoldIcon/></ToggleButton>
            <ToggleButton value="Italic" aria-label='Italic'><FormatItalicIcon/></ToggleButton>
            <ToggleButton value="Underlined" aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
        </Stack>
        </Stack>        
    </Stack>
    </Paper>
    </Container>
  )
}

export default Header
