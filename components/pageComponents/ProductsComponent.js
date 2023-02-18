// React Imports
import { useState } from 'react'

// Next Image
import Image from "next/legacy/image";

// MUI Imports
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';

// Project Imports
import thumbnail from '@/public/assets/pictures/thumbnail.jpg'

// Icons
import { ApiTwoTone, BoxPlotTwoTone, CheckCircleOutlined, DollarCircleTwoTone, HeartOutlined, QuestionCircleTwoTone, SkinOutlined, TabletOutlined } from "@ant-design/icons";


const ProductsComponent = () => {
  const [categoryHovered, setCategoryHovered] = useState('')
  const [vendorHovered, setVendorHovered] = useState('')
  const theme = useTheme()

  const handleMouseIn = (index) => {
    setCategoryHovered(index)
  }

  const handleMouseOut = () => {
    setCategoryHovered('')
  }

  const handleMouseInVendor = (index) => {
    setVendorHovered(index)
  }

  const handleMouseOutVendor = () => {
    setVendorHovered('')
  }


  const storeCategories = [
    {
      name: <Typography sx={ categoryHovered == '0' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Dukaflani Brands</Typography>,
      icon: <CheckCircleOutlined style={ categoryHovered == '0' ? {fontSize: 15, color: '#1976d2'} : {fontSize: 15, color: theme.myColors.textDark}} />
    },
    {
      name: <Typography sx={ categoryHovered == '1' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Apparel</Typography>,
      icon: <SkinOutlined style={ categoryHovered == '1' ? {fontSize: 15, color: '#1976d2'} : {fontSize: 15, color: theme.myColors.textDark}} />
    },
    {
      name: <Typography sx={ categoryHovered == '2' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Wellness</Typography>,
      icon: <HeartOutlined style={ categoryHovered == '2' ? {fontSize: 15, color: '#1976d2'} : {fontSize: 15, color: theme.myColors.textDark}} />
    },
    {
      name: <Typography sx={ categoryHovered == '3' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Electronics</Typography>,
      icon: <TabletOutlined style={ categoryHovered == '3' ? {fontSize: 15, color: '#1976d2'} : {fontSize: 15, color: theme.myColors.textDark}} />
    },
  ]

  const topVendors = [
    {
      name: <Typography sx={ vendorHovered == '0' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Dukaflani Brands</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '1' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Mbichwa</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '2' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Home 254 Apparel</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '3' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Vazzi</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '4' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Kaka Empire</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '5' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Zozanation</Typography>
    },
    {
      name: <Typography sx={ vendorHovered == '6' ? {color: '#1976d2'} : {color: theme.myColors.textDark}} variant="caption">Calif Wear</Typography>
    },
  ]

  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid md={2} sx={{ display: {xs:'none', md:'block'}}} item>
            <Paper sx={{padding: 1, height: '100%'}}>
                {storeCategories.map((category, i) => (
                  <Stack 
                      key={i}
                      spacing={1} 
                      direction='row' 
                      sx={{cursor: 'pointer', paddingBottom: 0.5}}
                      onMouseEnter={() => handleMouseIn(i)}
                      onMouseLeave={handleMouseOut}
                    >
                    <Box>{category.icon}</Box>
                    <Box>{category.name}</Box>
                  </Stack>
                ))}
                <Box sx={{paddingTop: 1}}>
                  <Typography variant='caption'>Top Vendors:</Typography>
                </Box>
                <Divider />
                  <Stack 
                      sx={{cursor: 'pointer'}}
                      spacing={-0.5}
                      >
                      {topVendors.map((vendor, i) => (
                    <Box 
                        key={i}
                        onMouseEnter={() => handleMouseInVendor(i)}
                        onMouseLeave={handleMouseInVendor}
                        >
                      {vendor.name}
                    </Box>
                    ))}
                  </Stack>
            </Paper>
          </Grid>
          <Grid xs={12} sm={9} md={7} item>
            <Box sx={{ width: '100%', height: '56.25%', borderRadius: 2, position: "relative", cursor:'pointer'}}>
              <Image 
                  src={thumbnail} 
                  layout='responsive'
                  alt='video title (Official Video)'
                  style={{borderRadius: 6}}
                  />
            </Box>
          </Grid>
          <Grid sm={3} sx={{ display: {xs:'none', sm:'block'}}} item>
            <Stack spacing={2} sx={{height:'100%'}}>
            <Paper sx={{padding: 1, height: '50%'}}>
              <Stack sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'space-evenly', height: '100%'}}>
                <Stack direction='row' spacing={1} sx={{display: 'flex', alignItems:'center'}}>
                  <DollarCircleTwoTone style={{fontSize: 25}} twoToneColor='#1976d2'/>
                  <Stack spacing={-1}>
                    <Typography variant='subtitle2'>Sell on Dukaflani</Typography>
                    <Typography variant='caption'>Become a Vendor</Typography>
                  </Stack>
                </Stack>
                <Stack direction='row' spacing={1} sx={{display: 'flex', alignItems:'center'}}>
                  <ApiTwoTone style={{fontSize: 25}} twoToneColor='#1976d2' />
                  <Stack spacing={-1}>
                    <Typography variant='subtitle2'>How it Works</Typography>
                    <Typography variant='caption'>Self Help Guide</Typography>
                  </Stack>
                </Stack>
                <Stack direction='row' spacing={1} sx={{display: 'flex', alignItems:'center'}}>
                  <QuestionCircleTwoTone style={{fontSize: 25}}  twoToneColor='#1976d2' />
                  <Stack spacing={-1}>
                    <Typography variant='subtitle2'>Help Center</Typography>
                    <Typography  variant='caption'>Frequently Asked Questions</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>
            <Paper sx={{width: '100%', height: '50%'}}>
              <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}} className='animated-gradient'>
                <Stack sx={{textAlign: 'center'}} spacing={1}>
                  <Typography sx={{color: 'white'}} variant='caption'>GET STARTED</Typography>
                  <Typography sx={{color: 'white', border: '2px solid white', cursor: 'pointer'}} variant='h6'>LOGIN</Typography>
                  <Typography sx={{color: 'white', letterSpacing: 3}} variant='body1'>VENDOR HUB!</Typography>
                </Stack>
              </Box>
            </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default ProductsComponent