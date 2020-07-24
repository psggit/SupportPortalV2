import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import './sass/app.scss';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory as createHistory } from 'history';
import { makeStyles } from '@material-ui/core/styles';
import Home from './home';
import Header from './components/header';
import OrderDetailPage from './container/OrderDetailPage';

const history = createHistory()
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0086AD",
      dark: "#2c3a7c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff1744",
      dark: "#212121",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Cabin",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

const useStyles = makeStyles(theme => ({
  content: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: "calc(100vh - 100px)",
    overflow:"auto"
  }
}))

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}  >
        <Header />
        <div className={classes.content}>
          <Route exact path="/home" component={Home} />
          <Route
            exact
            path="/home/order-details/:orderId"
            component={OrderDetailPage}
          />
        </div>

      </Router>
    </ThemeProvider>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;