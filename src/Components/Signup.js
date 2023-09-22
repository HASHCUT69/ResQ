import React, { useState, useRef } from 'react'
import { auth } from './Firebase'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
  from 'mdb-react-ui-kit';


const Signup = () => {
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate('/login');
  };
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const { username, email, password } = data;
  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const Signup = e => {
    if (data.password.length < 8) {
      window.alert("Password must have atleast 8 characters");
    }
    else {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then(user => navigate('/home')
      ).catch(err => console.log(err));
      window.alert("Registered Successfully.")
    }
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
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow>

                <MDBInput wrapperClass='mb-4' id='form1' type='text' autoComplete='off' className='text' placeholder='UserName' value={username} name='username' onChange={changeHandler} />

              </MDBRow>

              <MDBInput wrapperClass='mb-4' id='form1' type='email' placeholder='Email id' className='text1' value={email} name='email' onChange={changeHandler} />
              <MDBInput wrapperClass='mb-4' id='form1' autoComplete='off' type={passwordType} className='password' placeholder='Password : atleast 8 characters' value={password} name='password' onChange={changeHandler} />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='I concent to share my data in case of emergencies.' />
              </div>

              <button className='w-100 mb-4 btn btn-outline-secondary' size='md' onClick={Signup}>Sign up</button>
              <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <a href="/login" className="link-danger">Login</a></p>


            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>

  )
}

export default Signup
