import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Icon from './../icon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 28,
  },
  title: {
    flexGrow: 1,
  },
  text: {
    fontSize: "10px",
  },
  appBar: {
    padding: "14px 14px 14px 0",
    position: "static",
    width: "100%"
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton}>
          <Icon name="menuIcon" />
        </IconButton>
        <Icon name="hipbarLogo" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;