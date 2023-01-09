import { Box } from '@mui/material'
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
                
            </Grid>
        </Box>
    )
}

export default LocationCards;