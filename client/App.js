// import {MuiThemeProvider, createMuiTheme} from '@material-ui/styles'
// import {indigo, pink} from '@material-ui/core/colors'
// import {brown500, brown900} from '@material-ui/styles/colors';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'

import { hot } from 'react-hot-loader'

const theme = createMuiTheme({
    palette: {
        primary: {
        light: '#757de8',
        main: '#3f51b5',
        dark: '#002984',
        contrastText: '#fff',
    },
    secondary: {
        light: '#ff79b0',
        main: '#ff4081',
        dark: '#c60055',
        contrastText: '#000',
    },
        
        type: 'light'
    }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)