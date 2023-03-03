// React Imports
import { useState } from "react";

// Next Imports
import { useRouter } from 'next/router';

// MUI Imports
import { AppBar, Box, Toolbar, Stack, IconButton, Link, Avatar, TextField, InputBase } from "@mui/material"
import { useTheme } from '@mui/material/styles';

// Icons
import { MenuOutlined, ArrowLeftOutlined , MoreOutlined, ShoppingCartOutlined,
  BellOutlined, SearchOutlined  } from '@ant-design/icons'


const HeaderMobile = () => {
  const theme = useTheme()
  const router = useRouter()
  const [showSearch, setShowSearch] = useState(false)


  return (
    <AppBar sx={{ backgroundColor: theme.myColors.myBackground }} elevation={1}>
      <Toolbar variant="dense">
        {showSearch ? <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100%'}} >
          <IconButton onClick={() => setShowSearch(false)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <ArrowLeftOutlined  style={{ fontSize: 16, color: theme.myColors.textDark }} />
          </IconButton>
          <Box sx={{flex: 1,}}>
            <InputBase autoComplete="true" autoFocus fullWidth id="standard-basic" placeholder="Search Dukaflani" variant="standard" />
          </Box>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 1 }}>
              <SearchOutlined  style={{ fontSize: 16, color: theme.myColors.textDark }} />
          </IconButton>

        </Box>
        :
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'start', width: '100%'}} >
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
              <MenuOutlined style={{ fontSize: 16, color: theme.myColors.textDark }} />
          </IconButton>
          <Link 
              onClick={(e) => {
                e.preventDefault()
                router.push({ pathname: '/' })
              }}
              title='Dukaflani Home'>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'}}>
                <img style={{height: 25}} src='/branding/dukaflani-logo-blue-medium.png' alt='logo'/>
              </Box>
            </Link>
            <Stack direction='row' spacing={0.5} sx={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
              <IconButton onClick={() => setShowSearch(true)} edge="start" color="inherit" aria-label="search">
                <SearchOutlined  style={{ fontSize: 16, color: theme.myColors.textDark }} />
              </IconButton>
              <IconButton edge="start" color="inherit" aria-label="notifications">
                <BellOutlined style={{ fontSize: 16, color: theme.myColors.textDark }} />
            </IconButton>
              <IconButton edge="start" color="inherit" aria-label="shopping cart">
                <ShoppingCartOutlined style={{ fontSize: 16, color: theme.myColors.textDark }} />
            </IconButton>
            <Avatar sx={{ width: 24, height: 24 }} src='/no-image.png' alt='Jidraff Gathura'/>
              <IconButton edge="start" color="inherit" aria-label="more" sx={{marginRight: 1}}>
                <MoreOutlined style={{ fontSize: 16, color: theme.myColors.textDark }} />
            </IconButton>
            </Stack>
        </Box>}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderMobile