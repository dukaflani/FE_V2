// Next Imports
import { useRouter } from 'next/router';

// Next Image
import Image from "next/legacy/image";


// MUI Imports
import { Box, Grid, Typography, Avatar, IconButton, Stack, Tooltip, Link, Skeleton } from "@mui/material"
import { useTheme } from '@mui/material/styles';

// Icons
import { CheckCircleFilled, MoreOutlined } from "@ant-design/icons";

// Project Imports
import thumbnail from '@/public/assets/pictures/thumbnail.jpg'



const VideoCard = () => {
  const router = useRouter()
  const theme = useTheme()
  const videoTitle = 'Rong Reggae (Official Music Video) ft Mc GiJo, RiDiQ & Skillo'
  const artistName = 'Wakadinali'
  


  return (
    <Box sx={{ minHeight: 260}}>
      <Box sx={{ width: '100%', height: '100%', maxWidth: 350, margin: 'auto'}}>
        {true ? (
          <Box sx={{ width: '100%', height: '56.25%', borderRadius: 2, position: "relative", cursor:'pointer'}}>
            <Image 
                src={thumbnail} 
                layout='responsive'
                alt='video title (Official Video)'
                style={{borderRadius: 6}}
                />
          </Box>
        ) : (<Skeleton animation="wave"  variant="rectangular" sx={{ borderRadius: 2, paddingTop: '56.25%'}} />)}
        
        <Box>
          <Grid container sx={{paddingTop: 1}}>
            <Grid  xs={2} item>
              {true ? (<Avatar  src='/assets/pictures/wakadinali_profile.jpg' />) : (<Skeleton animation="wave" variant="circular" width={40} height={40} />)}
            </Grid>
            {true ? (
              <Grid sx={{ display: 'flex', alignItems: 'start', justifyContent: 'start', paddingLeft: 1, cursor:'pointer'}} xs={9} item>
              <Stack spacing={1}>
              <Link 
                onClick={(e) => {
                  e.preventDefault()
                  router.push({ pathname: '/' })
                }}
                title={videoTitle}
                className="line-clamp-2 line-clamp"
                variant='subtitle2'
                underline="none"
                sx={{color: theme.myColors.textDark }}
                >
                  {videoTitle}
                </Link>
                <Stack>
                  <Stack direction="row" spacing={0.5}>
                    <Tooltip title={artistName} placement="top" >
                      <Typography sx={{letterSpacing: 0}} className="line-clamp-1 line-clamp" variant='caption'>{artistName}</Typography>
                    </Tooltip>
                    <Tooltip title='Verified' placement="top" >
                      <CheckCircleFilled style={{ fontSize: 10, color: theme.myColors.textDark }} />
                    </Tooltip>
                  </Stack>
                  <Typography sx={{lineHeight: 1, letterSpacing: 0}} variant='caption'>3.5k views &bull; 8 hours ago</Typography>
                </Stack>
              </Stack>
            </Grid>
            ) : (
              <Grid sx={{ display: 'flex', alignItems: 'start', justifyContent: 'start', paddingLeft:1}} xs={9} item>
                <Stack spacing={1} sx={{width: '100%'}}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Stack>
              </Grid>
            )}
            
            <Grid sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center'}} xs={1} item>
              <IconButton size='small'>
                <MoreOutlined />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}




const VideosComponent = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={2}>
        {[...Array(12).keys()].map((item, i) => (
           <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <VideoCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default VideosComponent