import { Box, Grid } from '@mui/material'
import React from 'react'
import { locationElements as cardLocationElements } from './data/MockData'

const LocationCards = () => {

    const [cards] = React.useState(cardLocationElements)
    if(!cards.length){
        return null
    }
    return (
        <Box sx={{ mx: 2 }}>
            <Grid container rowSpacing={3} columnSpacing={3}>
               {
                    cards.map((location) => {
                        return(
                            <Grid key={location.id} xs={12} sm={2} md={4} lg={3}>
                                { location.location }
                            </Grid>
                        )
                    })
               } 
            </Grid>
        </Box>
    )
}

export default LocationCards;