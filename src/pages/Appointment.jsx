import { Container, Typography } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Copyright from '../components/Copyright';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    },
    paper: {
      marginTop: theme.spacing(5),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: 500,
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.info.main,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      height: 40,
    },
    text: {
      marginTop: 40,
    },
    date: {
      marginTop: 30,
      marginBottom: 10,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    lastMenu: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Header />
      <CssBaseline />
      <Container className={classes.container}>
        <Typography variant='h4' className={classes.text}>
          Онлайн запись на приём
        </Typography>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactMailIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Заполните данные
          </Typography>
          <form className={classes.form}>
            <div>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='login'
                label='Фамилия'
                name='login'
                autoComplete='login'
                autoFocus
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Имя'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <TextField
                variant='outlined'
                margin='normal'
                fullWidth
                name='password'
                label='Отчество'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Запомнить меня'
              />
            </div>
            <div className={classes.lastMenu}>
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                  Специалисты
                </InputLabel>
                <Select
                  required
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  value={age}
                  onChange={handleChange}
                  label='Специалист'
                >
                  <MenuItem value=''>
                    <em>Пусто</em>
                  </MenuItem>
                  <MenuItem value={10}>Врач 1</MenuItem>
                  <MenuItem value={20}>Врач 2</MenuItem>
                  <MenuItem value={30}>Врач 3</MenuItem>
                </Select>
              </FormControl>
              <TextField
                required
                id='datetime-local'
                label='Выбор даты посещения'
                type='datetime-local'
                defaultValue='2021-01-24T10:30'
                className={classes.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Записаться
            </Button>
          </form>
        </div>
      </Container>
      <Copyright />
    </>
  );
}
