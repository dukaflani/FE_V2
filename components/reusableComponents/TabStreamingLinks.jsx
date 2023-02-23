// MUI Imports
import { Box, Typography, Stack } from "@mui/material"




export const StreamingLinksCard = () => {
  return (
    <div>StreamingLinks card</div>
  )
}



const TabStreamingLinks = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">STREAMING LINKS</Typography>
                    <Typography variant="caption">Click on the links below to stream or download Rong Reggae by Wakadinali</Typography>
                </Stack>
            </Box>
            <Box>
                {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <StreamingLinksCard/>
                    </Box>
                ))}
            </Box>
        </Stack>
    </Box>
  )
}

export default TabStreamingLinks