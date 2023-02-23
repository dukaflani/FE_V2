// Mui Imports
import { Box, Stack, Typography } from '@mui/material'

const Copyright = () => {
    const year = new Date().getFullYear()


  return (
    <Box sx={{paddingTop: 2, paddingBottom: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
      <Stack>
        <Typography variant='caption'>&copy; {year} Jidraff Gathura. All Rights Reserved</Typography>
        <Typography variant='caption'>#WeAreMusic</Typography>
      </Stack>
    </Box>
  )
}

export default Copyright