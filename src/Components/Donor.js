import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DonateBlood from './DonateBlood';
import DonateOrgans from './DonateOrgans';
import Navbar from './hello/comps/navbar/Navbar';

const Donor = ({ presentUser }) => {
  const navigate = useNavigate();
  const navigateBackToHome = () => {
    navigate('/home')
  }
  const [user, setUser] = useState({
    name: '',
    age: '',
    bloodGroup: '',
    complications: '',
    phoneNo: '',
    location: '',
  })

  const [donateBlood, setDonateblood] = useState(false);
  const [donateOrgans, setDonateorgans] = useState(false);
  const handleBlood = () => {
    setDonateblood(true);
    setDonateorgans(false);
  }
  const handleOrgan = () => {
    setDonateblood(false);
    setDonateorgans(true);
  }
  return (
    <div>
      <Navbar />
      <div className='container'>
        <button onClick={handleBlood}>
          Donate Blood
        </button>
        <button onClick={handleOrgan}>
          Donate Organs
        </button>
        {donateBlood && <DonateBlood presentUser={presentUser} />}
        {donateOrgans && <DonateOrgans presentUser={presentUser} />}
      </div>
    </div>
  )
}

export default Donor
