import { Box, Button, Link, Stack } from '@mui/material'
import React from 'react'
import { flexCenter } from '../Themes/ComStyles'
import { AiOutlineMenu, FaRegUserCircle } from 'react-icons/fa'


const ProfileSetting = () => {
  return (
    <Box sx={ flexCenter }>
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
                <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24} />
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSetting
