// React Imports
import { useState } from 'react'

// Components
import BottomNavDesktop from '@/components/reusableComponents/BottomNavDesktop'
import HeaderDesktop from '@/components/reusableComponents/HeaderDesktop'

// Mui Imports
import { Box } from '@mui/material'


const NavigationLayout = ({ children, setIsDarkMode, isDarkMode, value, setValue }) => {
  

  return (
    <>
      <HeaderDesktop setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} value={value} setValue={setValue} />
        <>{children}</>
    </>
  )
}

export default NavigationLayout