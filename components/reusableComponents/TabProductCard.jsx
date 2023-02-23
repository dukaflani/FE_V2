// MUI Imports
import { Box, Stack, Typography } from "@mui/material"

const TabProductCard = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack sx={{textAlign: 'center'}}>
                    <Typography variant="subtitle2">PRODUCTS & MERCHANDISE</Typography>
                    <Typography variant="caption">Buy from Wakadinali or products promoted by Wakadinali</Typography>
                </Stack>
            </Box>
            <Box>
                <Typography>product info</Typography>
            </Box>
        </Stack>
    </Box>
  )
}

export default TabProductCard