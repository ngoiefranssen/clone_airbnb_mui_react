import { Box, Grid } from '@mui/material'
import React from 'react'
import CarouselCard from '../Carousel/CarouselCard'
import { locationElements } from '../data/MockData'

const LocationCards = () => {

    const [cards] = React.useState(locationElements)
    if(!cards.length){
        return null
    }
    return (
        <Box sx={{ mx: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={3}>
               {
                    cards.map((location) => {
                        return(
                            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                                <CarouselCard location={location} />
                            </Grid>
                        )
                    })
               } 
            </Grid>
        </Box>
    )
}

export default LocationCards;