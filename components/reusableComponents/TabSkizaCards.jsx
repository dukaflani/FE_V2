// MUI Imports
import { Box, Stack, Typography } from '@mui/material'

export const TabSkizaTuneCard = () => {
  return (
    <div>Tune</div>
  )
}


const TabSkizaCards = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">RINGBACK TUNES</Typography>
                    <Typography variant="caption">Follow the instructions below to set Rong Reggae as your ringback tune</Typography>
                </Stack>
            </Box>
            <Box>
                {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <TabSkizaTuneCard/>
                    </Box>
                ))}
            </Box>
        </Stack>
    </Box>
  )
}

export default TabSkizaCards