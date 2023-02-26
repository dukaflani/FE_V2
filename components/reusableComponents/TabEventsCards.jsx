// NextJs Imports
import { useRouter } from 'next/router'

// MUI Imports
import { Box, Button, Card, CardActionArea, CardContent, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Icons
import { EnvironmentOutlined, FlagOutlined } from '@ant-design/icons'


export const TabEventCard = () => {
  const theme = useTheme()
  const router = useRouter()


  return (
    <Box sx={{paddingTop: 2}}>
      <Stack>
        <Box>
          <Typography sx={{color: 'whitesmoke', backgroundColor: theme.myColors.textDark}} variant='caption'>CLUB EVENT</Typography>
        </Box>
        <Card square>
            <CardContent>
              <Stack spacing={1}>
                <Stack spacing={0.4}>
                  <Stack direction='row' spacing={1}>
                    <EnvironmentOutlined />
                    <Typography className="line-clamp-1 line-clamp" variant='caption'>The English Point Marina</Typography>
                  </Stack>
                  <Stack direction='row' spacing={1}>
                    <FlagOutlined />
                    <Typography className="line-clamp-1 line-clamp" variant='caption'>Diani, Kenya</Typography>
                  </Stack>
                </Stack>
                <Typography className="line-clamp-2 line-clamp" variant='subtitle2'>Event title goes here and should have a line clamp of two</Typography>
                <Box sx={{border: '1px solid lightgrey', paddingTop: 1}}>
                  <Stack sx={{textAlign: 'center'}}>
                    <Typography variant='subtitle2'>22 MARCH 2023</Typography>
                    <Typography variant='caption'>22:30hrs</Typography>
                  </Stack>
                </Box>
                <Box sx={{width: '100%', paddingTop: 1}}>
                    <Button onClick={() => router.push({ pathname: '/events/event_id' }) } fullWidth variant='contained' size="small" >Event Details</Button>
                </Box>
              </Stack>
            </CardContent>
        </Card>
      </Stack>
    </Box>
  )
}


const TabEventsCards = () => {
  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack>
                    <Typography variant="subtitle2">EVENTS & TOUR DATED</Typography>
                    <Typography variant="caption">Discover events featuring both performance or appearances by Wakadinali</Typography>
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
