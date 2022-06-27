import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { createTheme,ThemeProvider} from '@mui/material'
import './style.css'

const theme = createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        fontSize:11,
                        color:"blue"
                    }
                }
            ]
        }
    }
})

export const TourCard = (props) => {
    const {tour} = props
  return ( 
        <ThemeProvider theme={theme}>
         <Grid item xs={12} md={3}>
             <Paper elevation={3} square>
              <img src={tour.image} alt='tour' className='img' />
              <Box paddingX={1}>
              <Typography vvariant="subtitle1" component="h2">{tour.name}</Typography>
              <Box sx={{display:"flex",alignItems:"center"}}>
                <AccessAlarmIcon sx={{height:15}}/>
                <Typography variant='body2' component="p">{tour.duration} hours</Typography>
              </Box>
              <Box sx={{display:"flex",alignItems:"center",marginTop:1}}>
              <Rating name="half-rating-read" value={tour.rating} precision={0.5} size="small" readOnly/>
              <Typography variant="body3" component="h5">{tour.rating}</Typography>
              <Typography marginLeft={2} variant="body2" component="h5">({tour.numberOfReviews} reviews)</Typography>
              </Box>
              <Box>
              <Typography variant="h6" component="h3">From C ${tour.price}</Typography>
              </Box>
              </Box>
             </Paper>
         </Grid>
         </ThemeProvider>
  )
}
