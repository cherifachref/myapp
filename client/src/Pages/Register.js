import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { register } from '../JS/Actions/user'
import { useNavigate } from "react-router-dom"
import { Button } from '@mui/material'


function Register() {
  
  const [newUser, setNewUser] = useState({})
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    setNewUser({...newUser,[e.target.name]:e.target.value })

  }
  let navigate = useNavigate();
  return (
    <div style={{backgroundImage: `url('./register.jpg')`,backgroundRepeat: 'no-repeat'}}>




<section className="vh-100 gradient-custom" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div
          className="card bg-dark text-white"
          style={{ borderRadius: "1rem" }}
        >
          <div className="card-body p-5 text-center">
            <div >
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">
                Welcome in MyCar
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  placeholder="Email address"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  name='email'
                  onChange={handleChange} 
                  
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="form-control form-control-lg"
                  name='name'
                  onChange={handleChange} 
                  
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Name
                </label>
              </div>

              <div className="form-outline form-white mb-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control form-control-lg"
                  name='phone'
                  onChange={handleChange} 
                  
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Phone
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  placeholder="Create password"
                  className="form-control form-control-lg"
                  name='password'
                  onChange={handleChange} 
                  
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>
              
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="button"
                
                onClick={() =>  {
                  
                  dispatch(register(newUser,navigate)) }}
              >
                Register
              </button>

            </div>
            <div><br/>
              <p className="mb-0">
                have account?{" "}
               <Button onClick={()=>navigate('/login')} >
                  Login
                  </Button>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Register