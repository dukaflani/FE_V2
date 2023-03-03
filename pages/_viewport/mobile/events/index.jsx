// React Imports
import { useState } from 'react';

// Nextjs Imports
import Head from 'next/head'

//  Mui Imports
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// Components
import MobileNavigationLayout from '@/layout/mobile/MobileNavigationLayout'
import EventsHomePageContent from '@/components/pageComponents/EventsHomePageContent'
import NavbarAdDesktopModal from '@/components/modals/NavbarAdDesktopModal'
import BottomNavDesktop from '@/components/reusableComponents/BottomNavDesktop';

const MobileEventsHomePage = ({ setIsDarkMode, isDarkMode, value, setValue }) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false);
  const adString = 'Rong Reggae (Official Music Video) ft Mc GiJo, RiDiQ & Skillo'


  return (
    <>
      <MobileNavigationLayout setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} value={value} setValue={setValue} >
        <Head>
          <title>Dukaflani Events - Plugging Business To Music</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box sx={{backgroundColor: theme.myColors.myBackground, minHeight: '100vh', paddingTop: 5, paddingBottom: 10}}>
          <Paper elevation={0} sx={{backgroundColor: theme.myColors.myBackground, paddingBottom: 0.4, paddingTop: 1, position: 'sticky', top: 47, zIndex: 999}}>
            <Container maxWidth='lg'>
              <div style={{display:'flex', flexDirection:'row', alignItems: 'start', justifyContent: 'center'}}>
                <div style={{display:'flex', flexDirection:'column',}}>
                    <span style={{marginRight: 10, fontSize: 13, fontWeight: 'bold', lineHeight: 1.1}} className="line-clamp-1 line-clamp">{adString}</span>
                    <div style={{display:'flex', flexDirection:'row', marginTop: -2}}>
                      <span style={{marginRight: 6, fontSize: 12, backgroundColor: 'yellow', paddingLeft: 5, paddingRight: 5}}>Ad</span>
                      <span style={{marginRight: 6, fontSize: 12, color: 'GrayText', width: 250, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Wakadinali</span>
                    </div>
                </div>
                <div>
                  <Button onClick={() => setOpen(true)} size="small">View</Button>
                </div>
              </div>
            </Container>
          </Paper>
          <EventsHomePageContent value={value} />
           {/* <Box sx={{display: { xs: 'block', md: 'none' }}}>
            <BottomNavDesktop value={value} setValue={setValue}/>
          </Box> */}
        </Box>
      </MobileNavigationLayout>

      <NavbarAdDesktopModal open={open} setOpen={setOpen} />
    </>
  )
}

export default MobileEventsHomePage