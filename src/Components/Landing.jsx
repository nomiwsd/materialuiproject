import React, { useState } from 'react'
import { BottomNavigation, Breadcrumbs, Button, Drawer, ImageList, ImageListItem, ImageListItemBar, Link, Menu, MenuItem, SpeedDial, SpeedDialAction, SpeedDialIcon, Stack, Typography } from '@mui/material'
import { Box,AppBar,Toolbar,IconButton } from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import MenuIcon from '@mui/icons-material/Menu'
import CopyIcon from '@mui/icons-material/FileCopyOutlined'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'

function Landing() {
    const [IsDrawerOpen,SetIsDraweropen]=useState(false)
    return (
      
       <Stack spacing={4}>
        
        {/* SpeedDial Example */}
       <Stack my={5}>
       <Box width='300px' my={5}> <SpeedDial sx={{
            position:'absolute',
            bottom:'14',
            right:'14'
        }} 
        icon={<SpeedDialIcon/>}
        ariaLabel='Navigation SpeedDial'>   
        <SpeedDialAction icon={<CopyIcon/>} tooltipTitle='Copy'/>
        <SpeedDialAction icon={<PrintIcon/>} tooltipTitle='Print'/>
        <SpeedDialAction icon={<ShareIcon/>} tooltipTitle='Share'/>
        </SpeedDial> </Box>
        </Stack>
        {/* Drawer Example */}
        <IconButton>
            <MenuIcon size='large' edge='start' color='inherit' aria-label='logo' onClick={()=> SetIsDraweropen(true)}/>
        </IconButton>
        <Drawer open={IsDrawerOpen} 
        onClose={()=>
        SetIsDraweropen(false)}
        p={2}
        width='400px'
        anchor='left'>
            <Box role='presentation'
            textAlign='center'>
                <Typography variant='body2' component='div' p={3}>Welcome To the Drawer</Typography>
            </Box>
        </Drawer>
        {/* Breadcrumb Example*/}
        <Box m={2}>
        <Breadcrumbs aria-label='breadcrumb'>
            <Link href='#' underline='hover'>Home</Link>
            <Link href='#' underline='hover'>Catelog</Link>
            <Link href='#' underline='hover'>Accessories</Link>
            <Link href='#' underline='hover'>Build</Link>
        </Breadcrumbs>
        
        <Breadcrumbs aria-label='breadcrumb' separator='>'
        maxItems={3}
        itemsAfterCollapse={2}>
            <Link href='#' underline='hover'>Home</Link>
            <Link href='#' underline='hover'>Catelog</Link>
            <Link href='#' underline='hover'>Accessories</Link>
            <Link href='#' underline='hover'>Build</Link>
        </Breadcrumbs>
        <Breadcrumbs aria-label='breadcrumb' separator='>'
        maxItems={3}
        itemsBeforeCollapse={2}>
            <Link href='#' underline='hover'>Home</Link>
            <Link href='#' underline='hover'>Catelog</Link>
            <Link href='#' underline='hover'>Accessories</Link>
            <Link href='#' underline='hover'>Build</Link>
        </Breadcrumbs>
        </Box>
        {/* Link Example */}
        <Link href='#' color='secondary' underline='hover'>Link</Link>
        <Link href='#' color='erorr' underline='none'>Link</Link>
            {/* Navbar Example */}
            <AppBar position='static'>
                <Toolbar>
                    <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                        <CatchingPokemonIcon/>
                    </IconButton>
                    <Typography varaint='h6' component='div' sx={{flexGrow:1}}>
                        Pokemon App
                        </Typography>
                    <Stack spacing={2} direction='row'>
                        <Button color='inherit'>Features</Button>
                        <Button color='inherit'>Pricing</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit' id='resource-button'>Resources</Button>
                        <Button color='inherit'>LogIn</Button>
                    </Stack>
                    {/* Menu Example */}
                    <Menu id='resources-menu'>
                        <MenuItem>Blog</MenuItem>
                        <MenuItem>Podcast</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>



        <Typography variant='body2'>
            welcome to Landing Page
        </Typography>
            <ImageList sx={{width:'500px',height:'450px'}} col={8}>
                {itemData.map((item)=>(
                <ImageListItem key={item.img}>
                    <img
                    src={item.img}
                    alt={item.title}
                    loading='lazy'/>
                </ImageListItem>
                ))}
            </ImageList>
            <ImageList  variant="woven" sx={{width:'500px',height:'450px'}} cols={4} gap={6}>
                {itemData2.map((item)=>(
                <ImageListItem key={item.img}>
                    <img
                    src={item.img}
                    alt={item.title}
                    loading='lazy'/>
                </ImageListItem>
                ))}
            </ImageList>
            <Box sx={{width:'500px',height:'450px',overflowY:'scroll'}}>
                {/* Masonary Examples */}
            <ImageList  variant="masonry"  cols={3} >
                {itemData2.map((item)=>(
                <ImageListItem key={item.img}>
                    <img
                    src={`${item.img}?w=238&fit=crop&auto=format&dpr=2`}
                    alt={item.title}
                    loading='lazy'/>
                    <ImageListItemBar title={item.title}/>
                </ImageListItem>
                ))}
            </ImageList>
            </Box>
       </Stack>
  )
}

export default Landing


const itemData=[{
    img:'Men(1).jpg',
    title:'Men Image'
},
{
    img:'Men(2).jpg',
    title:'Men Image'
},
{
    img:'Men(3).png',
    title:'Men Image'
},
{
    img:'Sale(1).jpg',
    title:'Sale Image'
},
{
    img:'Sale(2).jpg',
    title:'Sale Image'
},
{
    img:'Sale(3).jpg',
    title:'Sale Image'
},
{
    img:'Sale(1).jpg',
    title:'Sale Image'
}

]

const itemData2=[{
    img:'Women(1).jpg',
    title:'Women Image'
},
{
    img:'Women(2).gif',
    title:'Women Image'
},
{
    img:'Women(3).png',
    title:'Women Image'
},
{
    img:'Sale(1).jpg',
    title:'Sale Image'
},
{
    img:'Sale(2).jpg',
    title:'Sale Image'
},
{
    img:'Sale(3).jpg',
    title:'Sale Image'
},
{
    img:'Sale(1).jpg',
    title:'Sale Image'
}

]

