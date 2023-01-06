import { Box, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import React from 'react'
import { felxCenter } from '../Themes/CommontTheme'

const Logo = () => {
  return (
    <Box sx={felxCenter}>
      <FaAirbnb size={40} color={pink[500]} />
      <Typography sx= {{
        ml: 1,
        color: theme => theme.palette.secondary.main,
      }}>

      </Typography>
    </Box>
  )
}

export default Logo
