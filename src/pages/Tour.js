import React from 'react'
import AppBar from '../components/Navbar/AppBar.jsx'
import {Box, Container, Typography} from '@mui/material'
import ImageCollage from '../components/ImageCollage/ImageCollage.jsx'
import Accordian from '../components/Accordion/Accordion'
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';

export const Tour = () => {
    const [value, setValue] = React.useState(0);
  return (
     <>
     <AppBar/>
    <Container sx={{width:900}}>
        <Typography variant='h3' component="h1" sx={{marginY:3}}>This is header page</Typography>
        <Box marginTop={3} sx={{display:'flex'}}> 
            <img src='https://img.lovepik.com/photo/50073/8181.jpg_wh860.jpg' alt='img' height="400"/>
            <ImageCollage/>
        </Box>
        <Box>
            <Typography variant='subtitle2' sx={{fontSize:'1rem',marginY:2}}>About this ticket</Typography>
            <Typography variant='subtitle2' component="p" sx={{marginY:2}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
            <Typography variant='h5' component="h3">Frequently Asked Questions</Typography>
            <Accordian/>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Container>
     </>
  )
}
