import {
  Button,
  Container,
  Divider,
  Paper,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Photo from '../images/profile.jpeg';
import ProfileData from '../components/ProfileData';
import Copyright from '../components/Copyright';
import QR from '../images/qr.png';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
    },
    profile: { display: 'flex', flexDirection: 'row', marginTop: 50 },
    data: { display: 'flex', flexDirection: 'column', marginTop: 10 },
    photo: {
      width: 250,
      height: 250,
    },
    profileInfo: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: 25,
      marginTop: 10,
      flexGrow: 1,
    },
    medInfo: {
      display: 'flex',
      marginTop: 20,
    },
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.container}>
        <Paper elevation={3} className={classes.profile}>
          <img alt='profile' src={Photo} className={classes.photo}></img>
          <div className={classes.profileInfo}>
            <Typography variant='h4' style={{ marginBottom: 5 }}>
              Егор Семенов Александрович
            </Typography>
            <Divider style={{ marginBottom: 20, width: 550 }} />
            <Typography variant='h5' style={{ marginBottom: 15, fontSize: 20 }}>
              Возраст: 89 лет
            </Typography>
            <Typography variant='h5' style={{ marginBottom: 15, fontSize: 20 }}>
              Семейное положение: Женат
            </Typography>
            <Typography variant='h5' style={{ fontSize: 20, marginBottom: 15 }}>
              Работа: Администратор кафе
            </Typography>
            <Typography variant='h5' style={{ fontSize: 20 }}>
              Заболевания: Сахарный диабет
            </Typography>
          </div>
          <Paper
            elevation={3}
            style={{ marginTop: 75, width: 150, height: 150, marginRight: 70 }}
          >
            <img src={QR} style={{ width: 150, height: 150 }}></img>
          </Paper>
          <div>
            <Button
              variant='outlined'
              style={{ color: 'green', fontSize: 17, height: '100%' }}
            >
              Связаться
            </Button>
          </div>
        </Paper>
        <div className={classes.medInfo}>
          <div style={{ flexGrow: 1 }}>
            <Typography variant='h4'>Мед. информация</Typography>
          </div>
          <div>
            <Button
              variant='contained'
              style={{
                backgroundColor: 'white',
                color: 'green',
                fontSize: 15,
              }}
              href='https://drive.google.com/u/0/uc?id=1472wCPX59t7ZrROB34o5OQ4HzhmaSQCo&export=download'
            >
              Скачать
            </Button>
            <Button
              variant='contained'
              style={{
                backgroundColor: 'white',
                color: 'green',
                fontSize: 15,
                marginLeft: 10,
              }}
              onClick={() => window.print()}
            >
              Распечатать
            </Button>
          </div>
        </div>
        <Paper variant='outlined' elevation={3} className={classes.data}>
          <div style={{ backgroundColor: '#80808017' }}>
            <ProfileData />
          </div>
        </Paper>
      </Container>
      <Copyright />
    </>
  );
}
