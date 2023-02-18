// Font imports
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Global CSS Styles
import { myLightTheme, myDarkTheme } from '@/styles/theme';
import '@/styles/globalStyles.css'

// React Imports
import { useState } from 'react';

// Nextjs Imports
import type { AppProps } from 'next/app'

// MUI Imports
import { ThemeProvider, CssBaseline } from '@mui/material'



export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [value, setValue] = useState(0);
    
  return (
        <ThemeProvider theme={isDarkMode ? myDarkTheme : myLightTheme}>
            <CssBaseline />
            <Component {...pageProps} setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} value={value} setValue={setValue} />
        </ThemeProvider>
      
      )
}
