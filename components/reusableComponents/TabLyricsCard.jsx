// MUI Imports
import { Box, Card, CardContent, Divider, Stack, Typography } from "@mui/material"

export const TabLyricsVerseCard = () => {
  return (
    <Box sx={{paddingTop: 2}}>
      <Stack spacing={-0.5}>
        <Typography variant="button">Intro</Typography>
        <Typography variant="caption">Domani</Typography>
        <Typography sx={{whiteSpace: 'pre-line'}} variant="body2">Lyric verse goes here</Typography>
      </Stack>
    </Box>
  )
}


const TabLyricsCard = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack>
                    <Typography variant="subtitle2">LYRICS & RHYMES</Typography>
                    <Typography variant="caption">Learn the lyrics to Rong Reggae by Wakadinali as written by Domani, Scar, Skillo, GiJo</Typography>
                </Stack>
            </Box>
            <Card square>
              <CardContent>
                <Stack spacing={2}>
                  <Box>
                    <Stack spacing={0.5}>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">VOCALS</Typography>
                            <Typography variant="caption">Domani, Scar, Sewer Sydder, MC GiJo, MC Skillo</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">AUDIO</Typography>
                            <Typography variant="caption">Ares66</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">DIRECTOR</Typography>
                            <Typography variant="caption">Bowpa</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">WRITER</Typography>
                            <Typography variant="caption">Domani, Scar, Sewer Sydder, MC GiJo, MC Skillo</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">BACKGROUND VOCALS</Typography>
                            <Typography variant="caption">---</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">INSTRUMENTS</Typography>
                            <Typography variant="caption">---</Typography>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Stack spacing={-0.5} direction="column">
                            <Typography variant="subtitle2">EXECUTIVE PRODUCER</Typography>
                            <Typography variant="caption">BigbeatsAfriq</Typography>
                          </Stack>
                        </Stack>
                    </Stack>
                  </Box>
                  <Divider/>
                  <Box>
                  {[...Array(4).keys()].map((link, i) => (
                          <Box key={i}>
                              <TabLyricsVerseCard/>
                          </Box>
                      ))}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
        </Stack>
    </Box>
  )
}

export default TabLyricsCard