import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../JS/Actions/user'
import { useNavigate } from "react-router-dom"
import { loginAdmin } from '../JS/Actions/admin'
import { Button } from '@mui/material'



function Login() {
  const [user, setUser] = useState({})
  const dispatch = useDispatch()
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  let navigate = useNavigate();

  
  return (

    <div style={{backgroundImage: `url('./login3.jpg')`,backgroundRepeat: 'no-repeat'}}>

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
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">
                Please enter your login and password!
              </p>
              <div className="form-outline form-white mb-4">
                <input
                  type="email"
                  id="typeEmailX"
                  className="form-control form-control-lg"
                  name='email'
                  onChange={handleChange} 
                  value={user.email}
                />
                <label className="form-label" htmlFor="typeEmailX">
                  Email
                </label>
              </div>
              <div className="form-outline form-white mb-4">
                <input
                  type="password"
                  id="typePasswordX"
                  className="form-control form-control-lg"
                  name='password'
                  onChange={handleChange} 
                  value={user.password}
                />
                <label className="form-label" htmlFor="typePasswordX">
                  Password
                </label>
              </div>
              
              <button
                className="btn btn-outline-light btn-lg px-5"
                type="button"
                onClick={() =>{
                
                  if(user.email==="admintest@gmail.com"){
                    let admin={ emailAdmin:user.email,passwordAdmin:user.password}
                    dispatch(loginAdmin(admin,navigate))
                  }else dispatch(login(user,navigate))
              
                  return true
                } 
              }
              >
                Login
              </button>

            </div>
            <div><br/>
              <p className="mb-0">
                Don't have an account?{" "}
                <Button onClick={()=>navigate('/register')}>
                  Sign Up
                  </Button>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>












 



       {/* <h2>Login page</h2>
        <label>email</label>
        <input placeholder='enter email' name='email'  type='email' onChange={handleChange} value={user.email}/>
        <label>password</label>
        <input placeholder='enter password' name='password'  type='password' onChange={handleChange} value={user.password}/>
       <button onClick={() => dispatch(login(user,navigate))}>login</button> */}


    </div>
  )
}

export default Login