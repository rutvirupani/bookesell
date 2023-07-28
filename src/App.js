import logo from './logo.svg';

import './App.css';
import { Route, Routes,NavLink } from 'react-router-dom';
import Welcome from './component/Welcome';
import User from './component/User';



function App() {
  return (
    <div>
      <div>
      <NavLink to='/'> HOME </NavLink><br/>
      <NavLink to='/welcome'> WELCOME </NavLink><br/>
      <NavLink to='/user'> USER </NavLink>
      </div>
      <Routes path='/'>
        <Route index element={<h1>THIS IS HOME PAGE</h1>} />
        <Route path='/welcome' element={ <Welcome/>} />
        <Route path='/user' element={<User name="Rutvi Rupani" role="student"/>}/>
      </Routes>
    </div>
  );
}

export default App;