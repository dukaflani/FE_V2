// MUI Imports
import { Box, Stack, Typography } from '@mui/material'

export const TabAlbumTrackCard = () => {
  return (
    <div>Track</div>
  )
}


const TabAlbumCard = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">MUSIC COLLECTION</Typography>
                    <Typography variant="caption">Explore more from Rong Rende the album by Wakadinali</Typography>
                </Stack>
            </Box>
            <Box>
                <Typography>album art</Typography>
            </Box>
            <Box>
                {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <TabAlbumTrackCard/>
                    </Box>
                ))}
            </Box>
        </Stack>
    </Box>
  )
}

export default TabAlbumCard