
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAdmin } from '../JS/Actions/admin'
import CardCarDefault from './CardCarDefault'
import CardUserDefault from './CardUserDefault'
import Button from '@mui/material/Button';



const ProfileAdmin = () => {
    
const dispatch = useDispatch()

const mycar=useSelector(state=>state.carReducer.car)

const allMyUser = useSelector(state=>state.adminReducer.allUser)



console.log(allMyUser)
  return (
    <div style={{backgroundColor:'#F0B27A'}}>


        
        <div style={{textAlign:'center'}}>
          <h1 style={{backgroundColor:'green'}}>-- 🕵️‍♂️ Welcome Admin 😎 --</h1>
        
        <Button  variant="contained"  size="large" color="error" onClick={()=>dispatch(logoutAdmin())} >
          -LOGOUT-
        </Button>
        <h1 style={{color:'yellow'}}>🚗🚗🚗-All Car Added-🚗🚗🚗</h1>
        
        </div>

        <div style={{display:'flex' ,justifyContent:'space-evenly',flexWrap:'wrap'}}>
          {mycar.map((el,i)=><CardCarDefault kye={i}  car={el} />)}
        </div>
        <h1 style={{color:'yellow',textAlign:'center'}}> 🧑 👨 👩‍🦱-All User-👧 🧒 👦</h1>
        <div style={{display:'flex' ,justifyContent:'space-evenly',flexWrap:'wrap'}}>
          { allMyUser.map((el)=> <CardUserDefault allUser={el} /> ) }
        </div>
        
        
        

        

    </div>
  )
}

export default ProfileAdmin