import { Button, Divider, Paper, Stack, Typography } from '@mui/material';
import React from 'react'


const choices = [
    { id: 1, text: 'Any where' },
    { id: 2, text: 'Any week' },
    { id: 3, text: 'Any guest', withIcon: true },
];
const LocationSearch = () => {
  return (
    <Paper
        sx={{
            borderRadius: 20,
            ml: 15,
        }}
        elevation={3}
    >
        <Stack
            sx={{
                borderRadius: 20,
                pl: 2,
            }}
            divider={<Divider orientation='vertical' flexItem />}
        >
            {
                choices.map((choice) => {
                    return(
                       <Button key={choice.id}>
                        <Typography sx={{
                            color: (theme) => theme.palette.text.primary
                        }}></Typography>
                       </Button>
                    )
                })
            }
        </Stack>
    </Paper>
  )
}

export default LocationSearch
