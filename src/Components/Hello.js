import React,{useState,useEffect} from 'react'
import logo from './assets/images/logo.png'
import video from './assets/images/video.mp4'
import { Link } from 'react-router-dom'
import firebaseDB from './Firebase'

const Hello = () => {
  const [getData,setGetData]=useState([]);
  React.useEffect(()=>{
    firebaseDB.child("rating").on('value',details=>{
      if(details.val()==null || details.val()==undefined){
        return;
      }
      else{
        setGetData(details.val());
      }
    })
  },[])
  var arr=Object.values(getData)
  var rating=0;
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
    rating=rating+arr[i];
  }
  var averageRating=rating/arr.length
  return (
<div>
<video className='videoTag' autoPlay loop muted>
  <source src={video} type="video/mp4" />
</video>
<header>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-2 pb-1 navbar-fixed-top">
    <div className="container">
      <div className="nav-item float-start">
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
          <ul className="navbar-nav">
            <li><h5><Link to="/" className="nav-item nav-link btn btn-dark">Home</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><h5><Link to="/home" className="nav-item nav-link btn btn-dark">Login</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li><h5><Link to="/signup" className="nav-item nav-link btn btn-dark">Sign up</Link></h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
<div className="container">
  <br /><br /><br /><br/>
  <div className="row px-3 ">
    <div className="col-sm-3 overlay" style={{marginTop:"40px"}}>
      <div className="card">
        <img className="card-img-overlay rounded img-thumbnail" style={{backgroundColor: 'rgba(245, 245, 245, 0.3)'}} src={logo} alt="Crypto Explorer" width="277px" height="285px" />
      </div>
    </div>
  </div>
</div>
<div className='overlay'>
<div className="centered"><font face="Verdana"size={4} color="white">Welcome To ResQ,</font><br /><font face="Times New Roman" size={5} color="white">In a world where every second counts, the ResQ Platform emerges as a vital solution to 
address the urgent need for efficient and organized blood and organ donation processes. This platform is 
designed to connect patients in need of blood or organ donations with willing donors. <br/>The platform utilizes a 
comprehensive database of donors, enabling patients to easily search for potential matches based on their 
nearest locality. Upon finding a potential donor, the patient can select the 
required blood group or organ and send a notification to the donor. ResQ goes beyond facilitating donations 
by incorporating additional features to enhance user experience and safety.</font></div>
<button className="but1">ResQ rating by our users: <small>{averageRating.toFixed(1)} <i className="bi bi-star-fill text-warning"></i></small></button>
</div>
{/* <footer className='overlay' style={{position:"absolute",bottom:"0",width:"94%",height:"70px"}}>
  <div className='float-end'>
      <button className='btn btn-primary' style={{borderRadius:"40%"}}>Help!</button>
  </div>
</footer> */}
</div>
  )
}

export default Hello
