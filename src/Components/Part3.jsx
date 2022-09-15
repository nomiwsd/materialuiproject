import React from 'react'
import {Avatar, AvatarGroup, Badge,Box, BottomNavigation, BottomNavigationAction, List, ListItem, ListItemText, Stack, ListItemIcon, ListItemAvatar, ListItemButton, Divider, Chip, Tooltip, IconButton, Table, TableContainer, TableHead, TableBody, TableRow, TableCell,Alert} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import {useState} from 'react'
function Part3() {
    const [value,setValue]=useState(0)
    const [chips,setChips]=useState(['Chip1','Chip2' ,'Chip3'])
    const handlechange= (chipToDelete)=>{
        setChips((chips)=> chips.filter((chip) =>chip!== chipToDelete))
    }
  return (
    <Stack spacing={3}>
        {/* Tooltip Example */}
        <Box>
        <TableContainer component='paper' sx={{maxHeight:'300px'}}>
            <Table aria-label='simple table' stickyHeader>
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Gender</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map(row=>(
                            <TableRow key={row.id}
                            sx={{
                                '&:last-child td ,&:last-child th':{
                                    border:0
                                }}
                            }
                            
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
            </TableContainer>
        </Box>
        <Box>
        <Tooltip title='Home' placement='left-start' arrow>
            <IconButton><HomeIcon/>
            </IconButton></Tooltip>
            <Tooltip title='Home' placement='left-start' arrow 
            enterDelay={500}
            leaveDelay={200}>
            <IconButton><HomeIcon/>
            </IconButton></Tooltip>
        </Box>
        {/* Chip Example */}
        <Box>
            <Stack direction='row' spacing={2}>
                
                <Chip label='Chip' size='medium' variant='outlined' color='secondary' avatar={<Avatar>VK</Avatar>}/>
                
                <Chip label='Chip' size='medium' variant='outlined' color='primary' icon={<HomeIcon/>}/>
                
                <Chip label='Click' size='medium' variant='outlined'  color='success' onClick={()=>alert('clicked the chip')}/>
           
                <Chip label='Delete' size='medium' variant='outlined'  color='error' onClick={()=>alert('clicked the chip')}
                onDelete={()=>alert('delete the chip')}/>


               { chips.map(chip =>
                (
                    <Chip key={chip} label={chip} onDelete={()=> handlechange(chip)}/>
                    ))
                }
            </Stack>
        </Box>
        {/* List Example */}
        <Box sx={{width:'300px',bgcolor:'blueviolet'}}>
        <List>
            <ListItem>
               <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText  primary='List Item 1'/>
            </ListItem>
            <ListItem>
            <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='List Item 2'/>
            </ListItem>
            <ListItem>
            <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='List Item 3'/>
            </ListItem>
        </List>
        <List>
            
            <ListItem disablepadding>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <HomeIcon/>#
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                
                <ListItemText  primary='List Item 1' secondary='this is the first list'/>
                
                </ListItemButton>
            </ListItem>
            <Divider/>
            <ListItem>
            <ListItemIcon><ListItemAvatar><Avatar><HomeIcon/></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary='List Item 2'/>
            </ListItem>
            <ListItem>
            <ListItemIcon><ListItemAvatar><Avatar><HomeIcon/></Avatar></ListItemAvatar></ListItemIcon>
                <ListItemText primary='List Item 3'/>
            </ListItem>
        </List>
       
        </Box>
        {/* Badge Example */}
        <Box spacing={4}
        sx={{width:'500px',height:'250px'}}>
            <Badge badgeContent={5} sx={{margin:' 20px'}}>
            <FavoriteIcon/>
            </Badge>
            <Badge badgeContent={0}
            showZero>
            <FavoriteIcon/>
            </Badge>
            <Badge badgeContent={100}>
            <FavoriteIcon/>
            </Badge>
            <Badge variant='dot'>
            <FavoriteIcon/>
            </Badge>
        </Box>
        {/* Avatar Example */}
        <Stack direction='row' my={5} spacing={1}>
        <Avatar>Be</Avatar>
        <Avatar>Ds</Avatar>
        <Avatar  variant='square' sx={{width:48,height:48}}>Rt</Avatar>
        <Avatar variant='rounded' sx={{width:48,height:48}}>Wo</Avatar>
        </Stack>
        <Stack direction='row' my={5} spacing={1}>
       <AvatarGroup max={2}> 
        <Avatar>Be</Avatar>
        <Avatar>Ds</Avatar>
        <Avatar>Rt</Avatar>
        <Avatar>Wo</Avatar>
        </AvatarGroup>
        </Stack>
        
      {/* Bottom Navigation Example*/}
     <BottomNavigation
    value={value}
    onChange={(event,newValue)=>
    setValue(newValue)}
    sx={{width:'100%',
     position:'absolute',
     bottom:'0'}}>
        <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
        <BottomNavigationAction label='Favorite' icon={<FavoriteIcon/>}/>
        <BottomNavigationAction label='Profile' icon={<PersonIcon/>}/>
     </BottomNavigation>
    </Stack>
  )
}

export default Part3
const tableData=
[{
    "id": 1,
    "first_name": "Sidonnie",
    "last_name": "Fanning",
    "email": "sfanning0@imgur.com",
    "gender": "Female",
    "ip_address": "221.253.102.182"
  }, {
    "id": 2,
    "first_name": "Mendel",
    "last_name": "Coulston",
    "email": "mcoulston1@usgs.gov",
    "gender": "Male",
    "ip_address": "235.146.108.227"
  }, {
    "id": 3,
    "first_name": "Druci",
    "last_name": "Jiruch",
    "email": "djiruch2@admin.ch",
    "gender": "Female",
    "ip_address": "141.22.181.217"
  }, {
    "id": 4,
    "first_name": "Jarad",
    "last_name": "Le Grice",
    "email": "jlegrice3@mozilla.com",
    "gender": "Male",
    "ip_address": "112.62.0.40"
  }, {
    "id": 5,
    "first_name": "Moritz",
    "last_name": "Eglaise",
    "email": "meglaise4@live.com",
    "gender": "Male",
    "ip_address": "240.155.12.133"
  }]