import React, { useState, useRef } from 'react';
import { auth } from './Firebase';
import firebaseDB from './Firebase'
import donor from './assets/images/donor.png'
import reciever from './assets/images/reciever.png'
import blood1 from './assets/images/blood1.png'
import blood2 from './assets/images/blood2.png'
import blood3 from './assets/images/blood3.jpg'
import blood4 from './assets/images/blood4.jpg'
import blood5 from './assets/images/blood5.png'
import organ1 from './assets/images/organ1.jpg'
import organ2 from './assets/images/organ2.jpg'
import organ3 from './assets/images/organ3.jpg'
import organ4 from './assets/images/organ4.jpg'
import organ5 from './assets/images/organ5.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap'
import emailjs from "@emailjs/browser";

const Home = ({ presentUser }) => {
  const [rating, setRating] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  }

  const handleModalClose = () => {
    setShowModal(false);
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9qa8bxg",
        "template_1n5ibqf",
        form.current,
        "DVJqTGNmaU58-639g"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          window.alert("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [starType1, setStarType1] = useState(false);
  const star1 = (e) => {
    e.preventDefault();
    if (starType1 === false) {
      setRating(1);
      setStarType1(true)
    }
    else {
      setRating(1)
      setStarType2(false)
      setStarType3(false)
      setStarType4(false)
      setStarType5(false)
    }
  }
  const [starType2, setStarType2] = useState(false);
  const star2 = (e) => {
    e.preventDefault();
    if (starType2 === false) {
      setStarType1(true);
      setStarType2(true)
      setRating(2)
    }
    else {
      setRating(2)
      setStarType3(false)
      setStarType4(false)
      setStarType5(false)
    }
  }
  const [starType3, setStarType3] = useState(false);
  const star3 = (e) => {
    e.preventDefault();
    if (starType3 === false) {
      setStarType1(true)
      setStarType2(true)
      setStarType3(true)
      setRating(3)
    }
    else {
      setRating(3)
      setStarType4(false)
      setStarType5(false)
    }
  }
  const [starType4, setStarType4] = useState(false);
  const star4 = (e) => {
    e.preventDefault();
    if (starType4 === false) {
      setStarType1(true)
      setStarType2(true)
      setStarType3(true)
      setStarType4(true)
      setRating(4)
    }
    else {
      setRating(4)
      setStarType5(false)
    }
  }
  const [starType5, setStarType5] = useState(false);
  const star5 = (e) => {
    e.preventDefault();
    if (starType5 === false) {
      setStarType1(true)
      setStarType2(true)
      setStarType3(true)
      setStarType4(true)
      setStarType5(true)
      setRating(5)
    }
    else {
      setRating(5)
    }
  }
  const submitRating = async (e) => {
    e.preventDefault();
    var dataAdded = await firebaseDB.child("rating").push(
      rating,
      err => {
        if (err) {
          console.log(err);
        }
        else {
          window.alert("Thank you for Rating us");
        }
      }
    )

  }
  const navigate = useNavigate();
  const navigateDonor = () => {
    navigate('/donor');
  };
  const navigateReceiver = () => {
    navigate('/receiver');
  };
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark pt-3 pb-2 navbar-fixed-top">
          <div className="container">
            <div className="nav-item float-start">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-droplet" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                    <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                  </svg></li>
                  <li> <h5 className="text-light">{presentUser.email}</h5></li>

                </ul>
              </div>
            </div>
            <div className="nav-item float-end">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto px-3">
                  <li><h5>
                    <button className="btn btn-outline-light" onClick={handleModalOpen}>Rate Us <i className="bi bi-star text-warning"></i></button>
                    <Modal show={showModal} onHide={handleModalClose} style={{ height: "550px" }}>
                      <Modal.Header className='bg-dark text-light'>
                        <Modal.Title>
                          <h4>Hello User &#128516;
                          </h4>
                        </Modal.Title>
                        <button className='btn btn-success float-end' onClick={handleModalClose}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg></button>
                      </Modal.Header>
                      <p className='contact text-dark'>
                        <h5>&nbsp;&nbsp;
                          <button onClick={star1} className='rating-button'>
                            {starType1 === true ? <i className="bi bi-droplet-fill text-danger"></i> : <i className="bi bi-droplet"></i>}
                          </button>&nbsp;
                          <button onClick={star2} className='rating-button'>
                            {starType2 === true ? <i className="bi bi-droplet-fill text-danger"></i> : <i className="bi bi-droplet"></i>}
                          </button>&nbsp;
                          <button onClick={star3} className='rating-button'>
                            {starType3 === true ? <i className="bi bi-droplet-fill text-danger"></i> : <i className="bi bi-droplet"></i>}
                          </button>&nbsp;
                          <button onClick={star4} className='rating-button'>
                            {starType4 === true ? <i className="bi bi-droplet-fill text-danger"></i> : <i className="bi bi-droplet"></i>}
                          </button>&nbsp;
                          <button onClick={star5} className='rating-button'>
                            {starType5 === true ? <i className="bi bi-droplet-fill text-danger"></i> : <i className="bi bi-droplet"></i>}
                          </button>&nbsp;&nbsp;&nbsp;&nbsp;
                          <button className='btn btn-outline-dark' onClick={submitRating}>Rate Us</button>
                        </h5>
                        <p className='text-dark'> &nbsp;&nbsp; Feel Free to Contact us whenever you , </p>
                        <ul className='text-dark'>
                          <li>
                            <small>Need help !</small>
                          </li>
                          <li>
                            <small>If you have any ideas or suggestions to share, you are Appreciated !</small>
                          </li>
                          <li>
                            <small>And if you found any Bug? Let me know !</small>
                          </li>
                        </ul>
                        <Modal.Body>
                          <form ref={form} onSubmit={sendEmail} >
                            <input className='input2' type="text" name="user_name" placeholder='Your Name' /><br />
                            <input className='input2' type="email" name="user_email" placeholder='Your Email id' /><br />
                            <textarea name="message" placeholder='Enter the Feedback...' cols={55} rows={5} /><br />
                            <button className='btn btn-success justify-content-center' type="submit">Send</button>
                          </form>
                        </Modal.Body>
                      </p>
                    </Modal>
                  </h5></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <li><button className='btn btn-outline-light' onClick={() => auth.signOut()}>LogOut</button></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='container' style={{ paddingTop: "100px", marginLeft: "300px" }}>
        <a title='Want to donate' className='hoverdonor' onClick={navigateDonor}><img src={donor} style={{ border: "5px solid white", padding: "15px" }} height={305} width={370} /></a>
        <a style={{ marginLeft: "50px" }} title='Want a donor' className='hoverdonor' onClick={navigateReceiver}><img src={reciever} style={{ border: "5px solid white", padding: "15px" }} height={305} width={370} /></a>
      </div>
      <br /><br /><br /><br />

      <section id="questions" className="p-5 pt1">
        <div className="container text-light">
          <h3 className="text-center mb-4">Awareness on Blood and Organ Donation</h3>
          <div className="accordion accordion-flush" id="questions">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-zero"
                >
                  What are the types of Blood Groups?
                </button>
              </h2>
              <div
                id="question-zero"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={blood2} width={250} height={250} />
                    </div>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        There are 8 main blood groups.They are A+,A-,B+,B-,O+,O-,AB+,AB-. Your blood group is determined by the genes you inherit from your parents. Each group can be either RhD positive or RhD negative, which means in total there are 8 blood groups.<br />
                        Blood transfusions must be carefully matched to avoid adverse reactions. People with RhD positive blood  can receive either RhD positive or RhD negative blood, while those with RhD negative blood can only receive RhD negative blood.<br />
                        It's essential to know your blood group for medical purposes and emergencies. Blood donation and transfusion play a critical role in saving lives and providing essential medical treatments.


                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-one"
                >
                  Why is blood donation important?
                </button>
              </h2>
              <div
                id="question-one"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Blood donation is important because it saves lives. Donated blood is used for medical treatments, surgeries, emergencies, and to support patients with various medical conditions, including those with chronic diseases and trauma victims.
                      </p>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={blood1} width={250} height={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-two"
                >
                  Can I donate blood if I have certain medical conditions or take medications?
                </button>
              </h2>
              <div
                id="question-two"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={blood3} width={250} height={250} />
                    </div>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        It depends on the specific medical condition and medications. Some conditions and medications may restrict blood donation, while others may not be a concern. It is essential to disclose all medical information during the screening process to determine eligibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-three"
                >
                  Is blood donation safe?
                </button>
              </h2>
              <div
                id="question-three"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Yes, blood donation is generally safe for healthy individuals who meet the eligibility criteria. Blood banks and donation centers follow strict protocols to ensure the safety of donors and recipients.
                      </p>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={blood4} width={250} height={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-four"
                >
                  How can I raise awareness about the importance of blood donation?
                </button>
              </h2>
              <div
                id="question-four"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={blood5} width={250} height={250} />
                    </div>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        You can raise awareness by participating in blood donation drives, sharing information on social media, organizing educational events, and encouraging friends and family to donate blood.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-five"
                >
                  What is organ donation?
                </button>
              </h2>
              <div
                id="question-five"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Organ donation is the process of voluntarily giving organs or tissues from a living or deceased person to save or improve the life of another person who is in need of an organ transplant.
                      </p>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={organ1} width={250} height={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-six"
                >
                  Which organs and tissues can be donated?
                </button>
              </h2>
              <div
                id="question-six"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={organ2} width={250} height={250} />
                    </div>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Organs that can be donated include the heart, liver, kidneys, lungs, pancreas, and intestines. Tissues that can be donated include corneas, skin, bone, heart valves, and blood vessels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-seven"
                >
                  Is organ donation possible after death?</button>
              </h2>
              <div
                id="question-seven"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Yes, deceased organ donation is common and can save multiple lives. Organ retrieval occurs only after brain death or circulatory death has been confirmed, and consent is obtained from the donor's family or through the donor's expressed wishes.
                      </p>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={organ3} width={250} height={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-eight"
                >
                  Can organ donation occur while the donor is alive?
                </button>
              </h2>
              <div
                id="question-eight"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={organ4} width={250} height={250} />
                    </div>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Yes, living organ donation is possible for certain organs, such as kidneys, parts of the liver, and partial lung donations. Living donors undergo thorough medical and psychological evaluations to ensure they can donate safely.

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#question-nine"
                >
                  What happens to the donated organs after transplantation?
                </button>
              </h2>
              <div
                id="question-nine"
                className="accordion-collapse collapse"
                data-bs-parent="#questions"
              >
                <div className="accordion-body">
                  <div className='row'>
                    <div className='col-sm-7 d-flex justify-content-center'>
                      <p className='text-dark'>
                        Donated organs are carefully matched to recipients based on factors like blood type, tissue compatibility, and medical urgency. After transplantation, recipients receive follow-up care and medications to prevent rejection.
                      </p>
                    </div>
                    <div className='col-sm-5 d-flex justify-content-center'>
                      <img src={organ5} width={250} height={250} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
