import { Box, Button, Link, Stack } from '@mui/material'
import React from 'react'
import { flexBetweenCenter } from '../Themes/ComStyles'

const ProfileSetting = () => {
  return (
    <Box sx={ flexBetweenCenter }>
        <Link href='#'>Become A Host</Link>
        <Stack>
            <Button>
                <BsGlobe size={24} />
            </Button>
            <Button 
                sx={{
                    borderRadius: 10,
                    border: '1px solid #ddd',
                }}
            >

            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSetting
