
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';



import NavBar from './Components/NavBar';
import { currentAdmin, getUser } from './JS/Actions/admin';
import { getCar } from './JS/Actions/car';
import { current } from './JS/Actions/user';
import Errors from './Pages/Errors';
import GoldCar from './Pages/GoldCar';
import Home from './Pages/Home';
import { InfoCar } from './Pages/InfoCar';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import ProfileAdmin from './Pages/ProfileAdmin';
import Register from './Pages/Register';
import PrivateRoute from './Routes/PrivateRoute';


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    if(localStorage.getItem("token")){
    dispatch(current())
    dispatch(currentAdmin())
    dispatch(getUser())
    }
    dispatch(getCar())

  }, [dispatch]) 

  

  const admin = useSelector(state=>state.adminReducer.admin)

  
  
  return (
    <div className="App" style={{backgroundImage:'url(./bg.jpg)',minHeight:'1080px',width:'100%' }}>
      {admin.emailAdmin==='admintest@gmail.com'?null: <NavBar />}
      <br/>
      <Routes>
        {admin.emailAdmin==='admintest@gmail.com'?null:<Route index element={<Home />} />}
        {admin.emailAdmin==='admintest@gmail.com'?null:<Route path='/register' element={<Register />} />}
        <Route path='/login' element={<Login />} />
        <Route path='/:variable' element={<InfoCar />} />
        {admin.emailAdmin==='admintest@gmail.com'?null:<Route path='/profile'  element={<> <PrivateRoute> <Profile /></PrivateRoute></>} />}
        <Route path='/profileAdmin' element={ <> <PrivateRoute> <ProfileAdmin /></PrivateRoute></>} />
        <Route path='/goldcar' element={<GoldCar />} />
        <Route path='/*' element={<Errors />} />
        
      </Routes>

    </div>
  );
}

export default App;
