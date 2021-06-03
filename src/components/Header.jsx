import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Badge, Container, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NotificationsIcon from '@material-ui/icons/Notifications';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
    links: {
      color: 'white',
      marginRight: 15,
    },
    nav: {
      backgroundColor: 'green',
    },
    icon: {
      fontSize: 37,
      color: 'white',
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.nav}>
        <Container>
          <Toolbar>
            <Link to='/home' className={classes.title}>
              <Typography variant='h6'>HowToAppointment</Typography>
            </Link>
            <Link to='/home'>
              <Button className={classes.links}>Главная</Button>
            </Link>
            <Link to='/appointment'>
              <Button className={classes.links}>Запись</Button>
            </Link>
            <Link to='/profile'>
              <Button className={classes.links}>Профиль</Button>
            </Link>
            <IconButton href='/profile'>
              <Badge badgeContent={3} color='secondary'>
                <NotificationsIcon className={classes.icon} />
              </Badge>
            </IconButton>
            <IconButton href='/profile'>
              <AccountCircleIcon className={classes.icon} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
