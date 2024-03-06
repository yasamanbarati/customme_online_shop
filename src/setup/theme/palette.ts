export const palette = {
    neutral: {
      main: '#fff',
      contrastText: '#0C0C0C',
    },
    primary:{
     main: '#0C68F4',
     light: '#e4eefe',
     dark: '#042352',   
    },
    secondary:{
     main: '#F45E0C',
     light: '#fddbc9', 
     dark: '#883406',  
    },
    error:{
     main: '#C91433',
     light:'#FAE7EB',   
    },
    success:{
     main: '#146C43',
     light:'#D1F7E5',   
    },
    black:'#110506',
  }   
  declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary']
      primary: Palette['primary']
      secondary: Palette['primary']
      error: Palette['primary']
      success: Palette['primary']
      black: string
    }
    interface PaletteOptions {
      neutral?: PaletteOptions['primary']
      primary?: PaletteOptions['primary']
      secondary?: PaletteOptions['primary']
      error?: PaletteOptions['primary']
      success?: PaletteOptions['primary']
      black?: string
    }
  }
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      neutral: true
      primary: true
      secondary: true
      error: true
      success: true
      black: true
    }
  }