import React,{useState} from 'react'
import { auth } from './Firebase';
import firebaseDB from './Firebase'

const DonateBlood = ({presentUser}) => {
    const [data,setData]=useState({
        name:"",
        location:"",
        bloodGroup:"",
        email:"",
        phno:"",
      })
      const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value});
      }
      const submitHandler=async(e)=>{
        e.preventDefault();
        var res="",x=data.email;
        for(let i=0;i<x.length;i++){
          if(x[i]=='@'){
            break
          }
          else{
            res=res+x[i]
          }
        }
        var dataAdded=await firebaseDB.child("blood").push(
          data,
          err=>{
            if(err){
              console.log(err);
            }
            else{
              window.alert("Profile added successfully");
            }
          }
        )
        setData({
            name:"",
            location:"",
            bloodGroup:"",
            email:"",
            phno:"",
        })
      }
    return (
      <div>
        <div className="row px-3 justify-content-center">
        <div className="card col-sm-5 bg-l rounded contactuu" style={{height:"400px"}}  >
        <center >
          <br/>
              <h4 align="center"><p style={{fontFamily:"verdana"}}>Blood Donor Details</p></h4>
            <form>
            <div className='row'>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control col-sm-4' placeholder='Name' name='name' value={data.name} onChange={changeHandler}/>
              </div>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control' placeholder='Email' 
              name='email'  value={data.email} onChange={changeHandler}/>
              </div>
            </div>
            <br/><br/>
            <div className='row'>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control col-sm-4' placeholder='Location' name='location' value={data.location} onChange={changeHandler}/>
              </div>
              <div className='col'>
              <div className='select-container'>
                <select name="bloodGroup" id="bloodGroup" onChange={changeHandler} value={data.bloodGroup}>
                  <option name='' bloodGroup="" >--BloodGroup--</option>
                  <option name='O+' bloodGroup="O+" >O+</option>
                  <option name='O-' bloodGroup="O-">O-</option>
                  <option name='A+' bloodGroup="A+">A+</option>
                  <option name='A-' bloodGroup="A-">A-</option>
                  <option name='B+' bloodGroup="B+">B+</option>
                  <option name='B-' bloodGroup="B-">B-</option>
                  <option name='AB+' bloodGroup="AB+">AB+</option>
                  <option name='AB-' bloodGroup="AB-">AB-</option>
                </select>
                <div class="select-arrow"></div>
                </div>
              </div>
            </div>
            <br/><br/>
            <div className='row'>
              <div className='col'>
              <input type="text" style={{border:"1px solid black"}} className='form-control col-sm-4' placeholder='Enter your Mobile Number' name='phno' value={data.phno} onChange={changeHandler}/>
              </div>
            </div>
            <br/><br/>
            <button className='btn btn-dark' onClick={submitHandler}>Submit</button><br/>
        </form>
        </center>
      </div>
    </div>
      </div>
    )
}

export default DonateBlood
