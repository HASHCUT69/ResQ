
import React, { useState, useEffect } from 'react'
import './About.css'
import about from '../../images/pics/about.jpg'
import firebaseDB from '../../../Firebase';
import { Link } from 'react-router-dom';

const About = () => {
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
		<section className='about py-5 my-5' id='about'>
			<div className='container'>
				<div className="row align-items-center">
					<div className="c col-md-6 col-12">
						<div className='left-side text-md-start text-center mb-lg-0 mb-5'>
							<h3 className='about-name'>Res<span>Q</span></h3>
							<p className='about-description text-muted'>Emergency medical assistance</p>
							<p className='about-text'>In a world where every second counts, ResQ emerges as your unwavering
								lifeline, championing the cause of efficient and meticulously organized blood and organ
								donation processes. With unwavering conviction, we stand as the embodiment of the profound impact
								that selfless giving can bring, committed to illuminating the darkest of hours with the gift of life itself.
								At ResQ, we understand that every individual, regardless of their background or circumstance, possesses the
								remarkable ability to be a beacon of hope and salvation. As we forge ahead, hand in hand with our
								dedicated community of donors and recipients, we are resolute in our mission to save lives each passing
								day.</p>
							<button className='btn btn-outline-success text-capitalize btn-sm shadow-lg me-2'>User Rating: {averageRating.toFixed(1)} <i className="bi bi-star-fill text-warning"></i></button>
							<Link to="/rateus" >
								<button className='btn btn-outline-success text-capitalize btn-sm shadow-lg me-2'>Rate us </button>
							</Link>
						</div>
					</div>
					<div className="c col-md-6 col-12">
						<div className='right-side text-lg-end text-center'>
							<img className='img-fluid w-75 shadow-lg' src="https://thumbs.dreamstime.com/b/blood-donation-concept-set-give-save-life-become-donor-idea-charity-help-doctor-vial-flat-vector-illustration-189645145.jpg" alt='about' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About