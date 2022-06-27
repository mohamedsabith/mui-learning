import React from 'react'
import  {TourCard} from "../components/Feed/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import AppBar from '../components/Navbar/AppBar'
import Typography from '@mui/material/Typography';
import data from '../data.json'


const Home = () => {
  return (
    <>
    <AppBar/>
    <Container sx={{marginY:3}}>
    {data.map((city,index) => (
          <div key={index}>
         <Typography variant="h4" component="h2" marginTop={3} >Top {city.name}</Typography>
         <Grid container spacing={5} sx={{marginY:1}}>
          {city.tours.map((city,index)=>(<TourCard tour={city} key={index}/>))}
          </Grid>
         </div>
      ))}
    </Container>
    </>
  )
}

export default Home