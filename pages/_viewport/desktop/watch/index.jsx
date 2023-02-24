// React Imports
import { useState } from 'react';

// Nextjs Imports
import Head from 'next/head'
import Image from "next/legacy/image";

//  Mui Imports
import { Avatar, Box, Card, colors, Container, Divider, Grid, Button, Stack, Typography, CardContent, CardActionArea, IconButton, Tooltip, Tabs, Tab, Paper, Fab } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Icons
import { LikeOutlined, DislikeOutlined, ShareAltOutlined , LikeFilled, 
    CheckCircleFilled, LinkOutlined, ShoppingOutlined, AudioOutlined, MobileOutlined, PlaySquareOutlined, CalendarOutlined } from '@ant-design/icons'

// Components
import NavigationLayout from '@/layout/desktop/NavigationLayout'
import TabStreamingLinks from '@/components/reusableComponents/TabStreamingLinks';
import TabProductCard from '@/components/reusableComponents/TabProductCard';
import TabLyricsCard from '@/components/reusableComponents/TabLyricsCard';
import TabSkizaCards from '@/components/reusableComponents/TabSkizaCards';
import TabAlbumCard from '@/components/reusableComponents/TabAlbumCard';
import TabEventsCards from '@/components/reusableComponents/TabEventsCards';
import MoreVideos from '@/components/reusableComponents/MoreVideos';

// Project Imports
import adposter1 from '@/public/assets/pictures/event1.jpg'



const CurrentVideo = ({ setIsDarkMode, isDarkMode, value, setValue }) => {
    const [tabPosition, setTabPosition] = useState(0)
    const theme = useTheme()

    const handleChange = (event, newValue) => {
        setTabPosition(newValue);
      };

  return (
    <NavigationLayout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} >
        <Head>
          <title>Buy Dukaflani Branded Hoodie - ksh.3,500 | Khaligraph Jones</title>
          <meta name="description" content="Watch 'Kwame' by Khaligraph Jones on
           Dukaflani to get the Lyrics, Streaming Links, Products and Merchandise, Skiza Tunes, The Album, Events and Tour Dates " />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box sx={{backgroundColor: theme.myColors.myBackground, minHeight: '100vh', paddingTop: 5}}>
            <Container maxWidth='lg'>
                <Box>
                    <Grid container sx={{padding: 5}} spacing={3}>
                        <Grid xs={12} md={8} item>
                            <Stack>
                                <Stack sx={{width: '100%', paddingBottom: '56.25%', backgroundColor: 'black'}}>
                                    <Box>video</Box>
                                </Stack>
                                <Stack>
                                    <Box>
                                        <Typography sx={{color: '#1976d2'}} variant='button'>DRILL</Typography>
                                        <Typography variant='h6' component='h1'>Wakadinali - Rong Reggae (Official Video) ft Skillo, MC GiJo & RiDiQ</Typography>
                                    </Box>
                                </Stack>
                                <Stack>
                                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'start', paddingBottom: 1}}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={6}>
                                                <Stack direction='row' spacing={1}>
                                                    <Typography variant='body2'>9,288 views</Typography>
                                                    <Box sx={{display: {xs: 'none', md: 'block'}}}>&bull;</Box>
                                                    <Typography sx={{display: {xs: 'none', md: 'block'}}} variant='body2'>Fri Feb 17 2023</Typography>
                                                </Stack>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Typography sx={{display: {xs: 'block', md: 'none'}}} variant='body2'>Fri Feb 17 2023</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Stack direction='row' spacing={2}>
                                        <Paper elevation={0} sx={{ backgroundColor: colors.grey[200], display: 'flex', alignItems: 'center', justifyContent: 'end', paddingY: 1, paddingX: 1.5, borderRadius: 10, }}>
                                            <Stack spacing={2} direction='row'>
                                                <Stack direction='row' spacing={1} sx={{cursor: 'pointer'}}>
                                                    <LikeOutlined style={{fontSize: 19}} />
                                                    <Typography sx={{ fontWeight:'bold' }} variant='body2'>17k</Typography>
                                                </Stack>
                                                <Divider orientation="vertical" variant="middle" flexItem />
                                                <DislikeOutlined style={{fontSize: 19, cursor: 'pointer'}} />
                                            </Stack>
                                        </Paper>
                                        <Paper elevation={0} sx={{ backgroundColor: colors.grey[200], display: 'flex', alignItems: 'center', justifyContent: 'end', paddingY: 1, paddingX: 1.5, borderRadius: 10, cursor: 'pointer'}}>
                                            <Stack spacing={2} direction='row'>
                                                <Stack direction='row' spacing={1}>
                                                    <ShareAltOutlined style={{fontSize: 19}} />
                                                    <Typography sx={{ fontWeight:'bold' }} variant='body2'>Share</Typography>
                                                </Stack>
                                            </Stack>
                                        </Paper>
                                    </Stack>
                                </Stack>
                                <Box sx={{paddingTop: 1, paddingBottom: 2}}>
                                    <Typography className="line-clamp-1 line-clamp" gutterBottom variant='body1'>Description uyuyguyg yuyguyg ygyyg iguyguy uudhvoudh iuyc jbu viuuy yuyuy iuyuyg yuyuys ygsuycuy yuycv uycvs ycsucyvsycsc sicsuysucys sisucvsuc iyuyssuy isycusycsx ugscygsicys isucgcsycsiy iucgsy sucsuys ucsycsuy uiscsys</Typography>
                                </Box>
                                <Typography variant='subtitle2'>MORE VIDEOS:</Typography>
                                <Divider/>
                                <Box sx={{paddingX: 1, paddingY: 1}}>
                                    <MoreVideos/>
                                </Box>
                            </Stack>
                        </Grid >
                        <Grid xs={12} md={4} item >
                                <Card variant='outlined'>
                                    <CardContent>
                                        <Box sx={{ width: '100%'}}>
                                            <Stack spacing={1} direction='row' sx={{display: 'flex', alignItems: 'center', width: '100%'}}>
                                                <Box>
                                                    <Avatar  src='/assets/pictures/wakadinali_profile.jpg' />
                                                </Box>
                                                <Box sx={{flexGrow: 1, display: 'flex', alignItems: 'start', justifyContent: 'start'}}>
                                                    <Stack spacing={-0.5}>
                                                        <Stack spacing={0.5} direction='row'>
                                                            <Typography variant='subtitle2'>Wakadinali</Typography>
                                                            {true && <CheckCircleFilled style={{ fontSize: 13, color: theme.myColors.textDark }} />}                   
                                                        </Stack>
                                                        <Typography variant='caption'>Fanbase 2.4m</Typography>
                                                    </Stack>
                                                </Box>
                                                <Box>
                                                    {
                                                    true ? <Tooltip title='Join Fanbase'>
                                                        <IconButton>
                                                            <LikeOutlined style={{fontSize: 20}} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    :
                                                    <Tooltip title='Leave Fanbase'>
                                                        <IconButton>
                                                            <LikeFilled style={{color: '#1976d2', fontSize: 20}} />
                                                        </IconButton>
                                                    </Tooltip>
                                                    }
                                                </Box>        
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                    <CardContent sx={{backgroundColor: theme.myColors.myBackground,}}>
                                        <Box>
                                            <Box>
                                                <Typography gutterBottom sx={{color: 'whitesmoke', backgroundColor: theme.myColors.textDark}} variant='caption'>SPONSORED</Typography>
                                            </Box>
                                            <Stack spacing={4}>
                                                <Box>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={5}>
                                                            <Box sx={{position: 'relative'}}>
                                                            <Image 
                                                                src={adposter1} 
                                                                layout='responsive'
                                                                alt='Ad poster'
                                                                height="100%"
                                                                width="100%"
                                                                />
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={7}>
                                                            <Box sx={{height: '100%', width: '100%', display: 'flex', alignItems: 'end', justifyContent: 'start'}}>
                                                                <Stack sx={{width: '100%'}}>
                                                                    <Typography className="line-clamp-2 line-clamp" variant='subtitle2'>Ad title goes here and should have a line clamp of two jhbhb jhbjhb hbjhb jhbjh jhbjhb hb hb jhbjhb jhb jh bjh jhbj hjhb </Typography>
                                                                    <Box sx={{width: '100%', paddingY: 1}}>
                                                                        <Stack spacing={1} direction='row' sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                                                            <Avatar sx={{ width: 24, height: 24 }}  src='/assets/pictures/wakadinali_profile.jpg' />
                                                                            <Typography className="line-clamp-1 line-clamp" variant='caption'>www.example-domain.com</Typography>
                                                                        </Stack>
                                                                    </Box>
                                                                    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Button fullWidth size="small" variant='contained'>Learn More</Button></Box>
                                                                </Stack>
                                                            </Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                                <Box>
                                                    <Stack spacing={2}>
                                                        <Box>
                                                            <Tabs
                                                                variant="scrollable"
                                                                scrollButtons
                                                                allowScrollButtonsMobile
                                                                value={tabPosition}
                                                                onChange={handleChange}
                                                            >
                                                                <Tab icon={<LinkOutlined />} iconPosition='start' label="Links" />
                                                                <Tab icon={<ShoppingOutlined />} iconPosition='start' label="Shop" />
                                                                <Tab icon={<AudioOutlined />} iconPosition='start' label="Lyrics" />
                                                                <Tab icon={<MobileOutlined />} iconPosition='start' label="Skiza Tunes" />
                                                                <Tab icon={<PlaySquareOutlined />} iconPosition='start' label="Album" />
                                                                <Tab icon={<CalendarOutlined />} iconPosition='start' label="Events" />
                                                            </Tabs>
                                                        </Box>
                                                        <Box>
                                                            {
                                                                {
                                                                    0: <TabStreamingLinks/>,
                                                                    1: <TabProductCard/>,
                                                                    2: <TabLyricsCard/>,
                                                                    3: <TabSkizaCards/>,
                                                                    4: <TabAlbumCard/>,
                                                                    5: <TabEventsCards/>,
                                                                }[tabPosition]
                                                            }
                                                        </Box>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </CardContent>
                                    <CardActionArea>
                                        <Box sx={{padding: 1, textAlign: 'center'}}>
                                        {
                                                                {
                                                                    0: <Typography variant='caption'>Terms & Conditions Apply</Typography>,
                                                                    1: <Typography variant='caption'>Sold by Dukaflani</Typography>,
                                                                    2: <Typography variant='caption'>&copy; {new Date().getFullYear()} Wakadinali. All rights Reserved</Typography>,
                                                                    3: <Typography variant='caption'>Terms & Conditions Apply</Typography>,
                                                                    4: <Typography variant='caption'>&copy; {new Date().getFullYear()} Wakadinali. All rights Reserved</Typography>,
                                                                    5: <Typography variant='caption'>Terms & Conditions Apply</Typography>,
                                                                }[tabPosition]
                                                            }
                                        </Box>
                                    </CardActionArea>
                                </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </NavigationLayout>
  )
}

export default CurrentVideo