// React Imports
import React from 'react';

// MUI Imports
import { ThemeOptions } from '@mui/material';
// import { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material' {
    interface ThemeOptions { 
        myColors: {
            myBackground: React.CSSProperties['color'],
            textDark: React.CSSProperties['color'],
            pageBackground: React.CSSProperties['color'],
        }
    }
}