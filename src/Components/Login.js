import React, { useState } from 'react'
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Navbar from './hello/comps/navbar/Navbar';
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


const Login = () => {
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate('/signup');
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  })
  const { email, password } = data;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const LogIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(user => navigate('/home')
    ).catch(err => {
      console.log(err);
      window.alert("Please Enter the correct Credentials");
    });
  }
  const [passwordType, setPasswordType] = useState("password");
  const showPassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text")
    }
    else {
      setPasswordType("password")
    }
  }

  return (
    <div>
      <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Login Image" />
          </MDBCol>

          <MDBCol col='4' md='6'>

            <div className="d-flex flex-row align-items-center justify-content-center">

              <h1 className="lead fw-normal mb-0 me-3">Sign in</h1>
            </div>


            <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} name='email' onChange={changeHandler} />
            <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' size="lg" autoComplete='off' type={passwordType} className='password' placeholder='Password' value={password} name='password' onChange={changeHandler} />


            <div className='text-center text-md-start mt-4 pt-2'>
              <button className="btn btn-outline-success" onClick={LogIn}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
            </div>

          </MDBCol>

        </MDBRow>



      </MDBContainer >
    </div >
  );
}


export default Login
