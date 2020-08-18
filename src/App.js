import React from "react";

import "./App.css";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import home from "./pages/home";
import Navbar from "./pages/Navbar";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

const theme = createMuiTheme({
 
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },
  
})

function App() {
  return (
  <MuiThemeProvider theme={theme}>
      <div className="App">
        {/* <Router> */}
          <Navbar />
          {/* <div className="container">
            <Switch>
              <Route  path="/" component={home} />
            </Switch>
          </div>
        </Router> */}
      </div>
  </MuiThemeProvider>
  );
}

export default App;
