// React Imports
import { useState } from 'react'

// MUI Imports
import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Paper, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Icons
import { CheckCircleFilled, SelectOutlined, PlayCircleFilled } from '@ant-design/icons'

export const TabAlbumTrackCard = ({ albumTrackHovered, i }) => {
  const theme = useTheme()
 
  return (
    <Card square sx={{marginTop: 1}} elevation={albumTrackHovered == i ? 1 : albumTrackHovered == null ? 0 : 0}>
      <CardActionArea>
        <CardContent>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Stack sx={{width: '100%'}}>
              <Typography className="line-clamp-1 line-clamp" variant='subtitle2'>Mbona</Typography>
              <Divider/>
              <Typography className="line-clamp-1 line-clamp" variant='caption'>Solo Project</Typography>
            </Stack>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 1}} >
              <PlayCircleFilled style={{color: theme.myColors.textDark}} />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}


const TabAlbumCard = () => {
  const theme = useTheme()
  const [albumHovered, setAlbumHovered] = useState(false)

  const handleMouseIn = () => {
    setAlbumHovered(true)
  }

  const handleMouseOut = () => {
    setAlbumHovered(false)
  }


  const [albumTrackHovered, setAlbumTrackHovered] = useState(null)

  const handleMouseIn2 = (idx) => {
    setAlbumTrackHovered(idx)
  }

  const handleMouseOut2 = () => {
    setAlbumTrackHovered(null)
  }


  return (
    <Box>
        <Stack spacing={2}>
            <Box>
                <Stack>
                    <Typography variant="subtitle2">MUSIC COLLECTION</Typography>
                    <Typography variant="caption">Explore more from Rong Rende the album by Wakadinali</Typography>
                </Stack>
            </Box>
            <Card square>
              <CardContent>
            <Stack spacing={3}>
                <Card square elevation={albumHovered ? 5 : 1} onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                <CardActionArea>
                    <CardMedia
                      sx={{ height: 200 }}
                      image='/assets/pictures/album-cover.jpg'
                      title="Album cover"
                    />
                  <CardContent>
                    <Stack>
                      <Stack spacing={0.5} direction='row'>
                          <Typography variant='subtitle2'>Wakadinali</Typography>
                          {true && <CheckCircleFilled style={{ fontSize: 13, color: theme.myColors.textDark }} />}                   
                      </Stack>
                      <Typography variant='body2'>Album Title</Typography>
                      <Typography variant='body2'>10 Tracks</Typography>
                      <Stack sx={{cursor: 'pointer'}} direction='row' spacing={1}>
                        <Typography sx={{color: albumHovered && '#1976d2'}} variant='body2'>Stream On: Amazon Music</Typography>
                        <SelectOutlined style={{color: albumHovered && '#1976d2'}} />
                      </Stack>
                    </Stack>
                  </CardContent>
                  </CardActionArea>
                </Card>
                <Box>
                    {[...Array(4).keys()].map((link, i) => (
                        <Box onMouseEnter={() => handleMouseIn2(i)} onMouseLeave={handleMouseOut2} key={i}>
                            <TabAlbumTrackCard albumTrackHovered={albumTrackHovered} i={i} />
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

export default TabAlbumCard