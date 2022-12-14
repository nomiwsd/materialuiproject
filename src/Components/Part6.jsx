import React from 'react'
import {Box,Paper,Tab,Table} from '@mui/material'
import {TabContext,TabList,TabPanel, Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator,Masonry} from '@mui/lab'
import {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { minHeight } from '@mui/system'

function Part6() {
    const [value,setValue]=useState('1')
  const handleChange=(event,newValue)=>{
    setValue(newValue)
  }
    return (
    <Box>
        {/* TimeLine Component */}
        <Box sx={{
            width:'300px'
            ,height:'250px'
        }}>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineOppositeContent color='text.secondary'>9:30am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined'/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                    <TimelineContent>
                        City A
                    </TimelineContent>          
                    </TimelineItem>
                    <TimelineItem>
                    <TimelineOppositeContent color='text.secondary'>9:30am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined'/>
                            <TimelineConnector/>
                        </TimelineSeparator>
                    <TimelineContent>
                        City B
                    </TimelineContent>          
                    </TimelineItem>
                    <TimelineItem>
                    <TimelineOppositeContent color='text.secondary'>9:30am</TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='secondary' variant='outlined'/>
                        </TimelineSeparator>
                    <TimelineContent>
                        City C
                    </TimelineContent>          
                    </TimelineItem>
                </Timeline>
        </Box>
        {/* Tabs Example */}
      <TabContext value={value}>
        <Box sx={{borderBottom:1,borderColor:'divider'}}>

           <TabList aria-label='Tabs example' onChange={handleChange}
           textColor='secondary'
           indicatorColor='secondary' 
           centered
           ><Tab label='Tab One' value='1' icon={<FavoriteIcon/>}
           iconPosition='start'/>
            <Tab label='Tab Two' value='2'/>
            <Tab label='Tab Three' value='3'/>
            </TabList> 
        </Box>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
      </TabContext>
      
      <TabContext value={value}>
        <Box sx={{borderBottom:1,borderColor:'divider'}}>

           <TabList aria-label='Tabs example' onChange={handleChange}
           textColor='secondary'
           indicatorColor='secondary' 
           variant='scrollable'
           scrollButtons='auto'
           ><Tab label='Tab One' value='1' icon={<FavoriteIcon/>}
           iconPosition='start'/>
            <Tab label='Tab Two' value='2'/>
            <Tab label='Tab Three' value='3'/>
            <Tab label='Tab Four' value='4'/>
            <Tab label='Tab Five' value='5'/>
            <Tab label='Tab Six' value='6'/>
            <Tab label='Tab Seven' value='7'/>
            </TabList> 
        </Box>
        <TabPanel value='1'>Panel One</TabPanel>
        <TabPanel value='2'>Panel Two</TabPanel>
        <TabPanel value='3'>Panel Three</TabPanel>
        <TabPanel value='4'>Panel Four</TabPanel>
        <TabPanel value='5'>Panel Five</TabPanel>
        <TabPanel value='6'>Panel Six</TabPanel>
        <TabPanel value='7'>Panel Seven</TabPanel>
      </TabContext>
    </Box>
  )
}

export default Part6
