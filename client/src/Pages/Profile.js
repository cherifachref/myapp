import React from 'react'

import CardUser from './CardUser'
import {  useSelector } from 'react-redux';



function Profile() {
  const user = useSelector(state=>state.userReducer.user)

  return (
    <div>
      {user.name&&<CardUser/>}
      
    </div>
  )
}

export default Profile