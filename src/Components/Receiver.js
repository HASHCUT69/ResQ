import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Receiver = ({presentUser}) => {
    const navigate=useNavigate();
    const navigateBackToHome=()=>{
        navigate('/home')
    }
  return (
    <div>
                  <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2 navbar-fixed-top">
        <div className="container">
          <div className="nav-item float-start">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
              <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-droplet" viewBox="0 0 20 20">
  <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
  <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
</svg></li>
                <li> <h5 className="text-light">Ping a Donor Here</h5></li>
              </ul>
            </div>
          </div>
          <div className="nav-item float-end">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto px-3">
              <li><button className='btn btn-outline-light text-left' onClick={navigateBackToHome}><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-arrow-90deg-left" style={{marginBottom:"5px"}} viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
</svg>&nbsp;Back</button></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </header>
    </div>
  )
}

export default Receiver
