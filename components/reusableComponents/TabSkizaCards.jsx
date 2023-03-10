// MUI Imports
import { Box, Card, CardContent, Divider, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const TabSkizaTuneCard = () => {
  const theme = useTheme()


  return (
    <Box sx={{paddingBottom: 1, paddingTop: 3}}>
      <Stack>
        <Box>
          <Typography sx={{color: 'whitesmoke', backgroundColor: theme.myColors.textDark}} variant='button'>Kenya</Typography>
        </Box>
        <Grid container>
          <Grid xs={4} item>
            <Typography variant='subtitle2' >Carrier</Typography>
          </Grid>
          <Grid xs={8} item>
            <Typography variant='body2' >Safaricom</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={4} item>
            <Typography variant='subtitle2' >Skiza Code</Typography>
          </Grid>
          <Grid xs={8} item>
            <Typography variant='body2' >78786457</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={4} item>
            <Typography variant='subtitle2' >SMS</Typography>
          </Grid>
          <Grid xs={8} item>
            <Typography variant='body2' >811</Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={4} item>
            <Typography variant='subtitle2' >USSD</Typography>
          </Grid>
          <Grid xs={8} item>
            <Typography variant='body2' >*811*5886458#</Typography>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  )
}


const TabSkizaCards = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack>
                    <Typography variant="subtitle2">RINGBACK TUNES</Typography>
                    <Typography variant="caption">Follow the instructions below to set Rong Reggae as your ringback tune</Typography>
                </Stack>
            </Box>
            <Card square>
              <CardContent>
                {[...Array(4).keys()].map((link, i) => (
                    <Box key={i}>
                        <TabSkizaTuneCard/>
                        <Divider sx={{display: i == 3 ? 'none' : 'block'}}/>
                    </Box>
                ))}
              </CardContent>
            </Card>
        </Stack>
    </Box>
  )
}

export default TabSkizaCards