import React, { useState } from 'react';
import { auth } from './Firebase';
import firebaseDB from './Firebase';

const DonateBlood = ({ presentUser }) => {
  const [data, setData] = useState({
    name: '',
    location: {},
    bloodGroup: '',
    email: '',
    phno: '',
  });

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setData({ ...data, location: pos })
      }
    );
    var res = "", x = data.email;
    for (let i = 0; i < x.length; i++) {
      if (x[i] == '@') {
        break
      }
      else {
        res = res + x[i]
      }
    }
    var dataAdded = await firebaseDB.child("blood").push(
      data,
      err => {
        if (err) {
          console.log(err);
        }
        else {
          window.alert("Profile added successfully");
        }
      }
    )
    setData({
      name: "",
      location: {},
      bloodGroup: "",
      email: "",
      phno: "",
    })
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card col-sm-6 bg-light rounded contact-form">
          <div className="card-body">
            <h4 className="card-title text-center">Blood Donor Details</h4>
            <form>
              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={changeHandler}
                />
              </div>
              <div className="form-group m-2">
                <select
                  className="form-control"
                  name="bloodGroup"
                  id="bloodGroup"
                  onChange={changeHandler}
                  value={data.bloodGroup}
                >
                  <option value="">-- Blood Group --</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option name='A+' bloodGroup="A+">A+</option>
                  <option name='A-' bloodGroup="A-">A-</option>
                  <option name='B+' bloodGroup="B+">B+</option>
                  <option name='B-' bloodGroup="B-">B-</option>
                  <option name='AB+' bloodGroup="AB+">AB+</option>
                  <option name='AB-' bloodGroup="AB-">AB-</option>
                </select>
              </div>
              <div className="form-group m-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Mobile Number"
                  name="phno"
                  value={data.phno}
                  onChange={changeHandler}
                />
              </div>
              <button
                className="btn btn-dark btn-block m-2"
                onClick={submitHandler}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;

