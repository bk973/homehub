import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import ThemeSettings from '../../theme'
//routes...
import Routes from '../../routes'

let theme = createMuiTheme(ThemeSettings)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
         <Routes/>
       </Router>
    </MuiThemeProvider>
  );
}

export default App;
