// Next Imports
import { useRouter } from 'next/router';
import Image from "next/legacy/image";

// MUI Imports
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';

// Icons
import { CheckCircleFilled, MoreOutlined } from "@ant-design/icons";

// Project Imports
import thumbnail from '@/public/assets/pictures/thumbnail.jpg'


export const MoreVideosCard = () => {
    const theme = useTheme()


  return (
    <>
        <Grid container columnSpacing={2}>
            <Grid item xs={4}>
                <Box sx={{position: 'relative', borderRadius: 2,}}>
                    <Image 
                        src={thumbnail} 
                        layout='responsive'
                        alt='video title (Official Video)'
                        style={{borderRadius: 6}}
                    />
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{width: '100%', display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
                    <Box>
                        <Stack>
                            <Typography className="line-clamp-2 line-clamp" variant='subtitle2'>Song title ( Official Music Videos)</Typography>
                            <Stack direction='row' spacing={0.5}>
                                <Typography className="line-clamp-1 line-clamp" variant='body2'>Wakadinali</Typography>
                                <CheckCircleFilled style={{ fontSize: 12, color: theme.myColors.textDark }} />
                            </Stack>
                            <Typography variant='body2'>12k views &bull; 6 months ago</Typography>
                        </Stack>
                    </Box>
                    <Box>
                        <IconButton>
                            <MoreOutlined />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}


const MoreVideos = () => {
  return (
    <>
    {[...Array(5).keys()].map((videoItem, i) => (
        <Box key={i} sx={{paddingTop: 2}}>
            <MoreVideosCard/>
        </Box>
    ))}
    </>
  )
}

export default MoreVideos