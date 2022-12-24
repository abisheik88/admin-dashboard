
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Account from './Account';
import './App.css';

import Login from './Login';
import Password from './Password';
import Portal from './Portal';
import './sb-admin-2.min.css'

import Userlist from './Userlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portal />}>


        </Route>
        <Route path='/userlist' element={<Userlist />} >

        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/password' element={<Password />} />
        <Route path='/account' element={<Account />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
