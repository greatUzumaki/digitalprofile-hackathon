import './App.css';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/home' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/appointment' component={Appointment} />
    </BrowserRouter>
  );
}

export default App;
