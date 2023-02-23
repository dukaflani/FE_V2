// MUI Imports
import { Box, Stack, Typography } from "@mui/material"

export const TabLyricsVerseCard = () => {
  return (
    <div>TabLyrics verse Card</div>
  )
}


const TabLyricsCard = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">LYRICS & RHYMES</Typography>
                    <Typography variant="caption">Learn the lyrics to Rong Reggae by Wakadinali as written by Domani, Scar, Skillo, GiJo</Typography>
                </Stack>
            </Box>
            <Box>
                <Typography>production team</Typography>
            </Box>
            <Box>
            {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <TabLyricsVerseCard/>
                    </Box>
                ))}
            </Box>
        </Stack>
    </Box>
  )
}

export default TabLyricsCard