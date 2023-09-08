import React,{useState} from 'react'
import {auth} from './Firebase'
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const navigateSignUp = () => {
    navigate('/signup');
  };
  const [data,setData]=useState({
    email:"",
    password:"",
  })
  const {email,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const LogIn=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).then(user=>navigate('/home')
    ).catch(err=>{
      console.log(err);
      window.alert("Please Enter the correct Credentials");
    });
  }
  const [passwordType, setPasswordType] = useState("password");
  const showPassword =(e)=>{
    e.preventDefault();
    if(passwordType==="password")
    {
     setPasswordType("text")
    }
    else{
      setPasswordType("password")
    }
  }
      return (
        <div>
          <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
        <div className="container">
          <div className="nav-item">
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
            <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-droplet" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
</svg></li>
            <li> <h5 className="text-light">ResQ</h5></li>
          </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <li><h5><Link to="/signup" className="nav-item nav-link btn btn-dark">Sign up</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <div className="container ">
    <br /><br /><br />
    <div className="row px-3 justify-content-center">
    <div className="col-sm-4 rounded" >
    <section className='login' id='login'>
  <div className='head'>
  <h3 className='company'>Login</h3>
  </div>
  <div className='form'>
    <form>
    <input  type="text" className='text' placeholder='Email id' value={email} name='email' onChange={changeHandler}/><br/><br/>
    <input autoComplete='off' type={passwordType} className='password' placeholder='Password' value={password} name='password' onChange={changeHandler}/>&nbsp;&nbsp;&nbsp;
    <button className="btn btn-sm btn-outline-light"  onClick={showPassword}>
      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
    </button>
    <br/><br/>
    <div className='justify-content-center'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={LogIn} className='btn btn-outline-light'>Login</button><br/><br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Don't have an Account? <a className='text-light' href="#"  onClick={navigateSignUp}>SignUp</a></small><span></span>
    </div>
    </form>
  </div>
</section>
</div>
    </div>
  </div>
        </div>
      )
}

export default Login
