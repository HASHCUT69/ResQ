import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.png';
import firebaseDB from './Firebase';
import Landing from './hello/Landing';

const Hello = () => {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    firebaseDB.child("rating").on('value', details => {
      if (details.val() == null || details.val() == undefined) {
        return;
      } else {
        setGetData(details.val());
      }
    });
  }, []);

  const arr = Object.values(getData);
  const rating = arr.reduce((acc, value) => acc + value, 0);
  const averageRating = arr.length === 0 ? 0 : rating / arr.length;

  return (
    // <div className="hello-container">
    //   <Navbar />

    //   <div className="content-container">
    //     <div className="card-container">
    //       {/* <div className="card"> */}
    //       <img className="card-img" src={logo} alt="Logo" />
    //       {/* </div> */}
    //     </div>

    //     <div className="overlay">
    //       <div className="centered">
    //         <h1 className="hero-title">Welcome To ResQ</h1>
    //         <p className="hero-description">
    //           In a world where every second counts, ResQ emerges as your unwavering
    //           lifeline, championing the cause of efficient and meticulously organized blood and organ
    //           donation processes. With unwavering conviction, we stand as the embodiment of the profound impact
    //           that selfless giving can bring, committed to illuminating the darkest of hours with the gift of life itself.
    //           At ResQ, we understand that every individual, regardless of their background or circumstance, possesses the
    //           remarkable ability to be a beacon of hope and salvation. As we forge ahead, hand in hand with our
    //           dedicated community of donors and recipients, we are resolute in our mission to save lives each passing
    //           day. ResQ invites you to join our journey, a journey filled with
    //           compassion, resilience, and the undeniable charm of humanity united for a common cause.</p>
    //       </div>
    //       <button className="hero-button">Explore ResQ</button>
    //       <button className="but1">ResQ rating by our users: <small>{averageRating.toFixed(1)} <i className="bi bi-star-fill text-warning"></i></small></button>
    //     </div>
    //   </div>



    //   {/* Detailed Introduction Section */}
    //   <section className="detailed-introduction-section">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-6 card">
    //           <h2 className="section-title">Our Mission</h2>
    //           <p>
    //             At ResQ, our mission is to bridge the gap between patients in need of life-saving blood and organ donations and compassionate donors willing to make a difference. We aim to create a community of heroes who come together to save lives.
    //           </p>
    //           <p>
    //             We understand the critical nature of emergencies, and that's why we're dedicated to making the donation process quick and efficient.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    //   <section className="detailed-introduction-section">
    //     <div className="container">
    //       <div className="row">

    //         <div className="col-md-6 card">
    //           <h2 className="section-title">Why Choose ResQ?</h2>
    //           <p>
    //             With ResQ, you can make an immediate impact on the lives of those in need. Here's why you should choose us:
    //           </p>
    //           <ul className="section-list">
    //             <li>Quick and Easy Donor Matching: Our platform uses advanced algorithms to connect patients with the nearest and most suitable donors.</li>
    //             <li>Secure and Confidential: Your privacy and information security are our top priorities. We use the latest encryption technology to ensure your data is safe.</li>
    //             <li>24/7 Support: Our dedicated support team is available around the clock to assist you in emergencies and answer your questions.</li>
    //             <li>Verified and Certified Donors: We rigorously verify and certify all donors to ensure their eligibility and reliability.</li>
    //             <li>Join a Lifesaving Community: When you join ResQ, you become part of a community of heroes who are actively contributing to saving lives.</li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Additional Details Section */}
    //   <section className="additional-details-section">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-12">
    //           <h2 className="section-title">How ResQ Works</h2>
    //         </div>
    //         <div className="col-md-4">
    //           <div className="feature card">
    //             <i className="bi bi-search"></i>
    //             <h3>Search for Donors</h3>
    //             <p>Patients can easily search for donors based on their nearest locality and specific blood group or organ requirements.</p>
    //           </div>
    //         </div>
    //         <div className="col-md-4">
    //           <div className="feature card">
    //             <i className="bi bi-chat-dots"></i>
    //             <h3>Contact Donors</h3>
    //             <p>Once a potential donor is found, patients can send a notification to the donor to initiate the lifesaving process.</p>
    //           </div>
    //         </div>
    //         <div className="col-md-4">
    //           <div className="feature card">
    //             <i className="bi bi-shield-check"></i>
    //             <h3>Verified Donors</h3>
    //             <p>All donors on ResQ are verified and certified, ensuring the safety and reliability of the donation process.</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    // d200003
    <Landing rating={averageRating} />
  );
};

export default Hello;
