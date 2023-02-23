// MUI Imports
import { Box, Stack, Typography } from '@mui/material'

export const TabEventCard = () => {
  return (
    <div>TabEventsCards</div>
  )
}


const TabEventsCards = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">EVENTS & TOUR DATED</Typography>
                    <Typography variant="caption">Discover events featuring performance or appearances by Wakadinali</Typography>
                </Stack>
            </Box>
            <Box>
                {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <TabEventCard/>
                    </Box>
                ))}
            </Box>
        </Stack>
    </Box>
  )
}

export default TabEventsCards
