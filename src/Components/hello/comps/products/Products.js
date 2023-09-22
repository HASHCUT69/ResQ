
import React, { Component } from 'react'
import Slider from './Slider'

const slides = [
	{
		city: 'Quick and Easy Donor Matching',
		// info: 'Our platform uses advanced algorithms to connect patients with the nearest and most suitable donors.',
		img: '../../images/pics/sl-p1.jpg',
	},
	{
		city: 'Secure and Confidential',
		// info: 'Your privacy and information security are our top priorities. We use the latest encryption technology to ensure your data is safe',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
	},
	{
		city: '24/7 Support',
		// info: 'Our dedicated support team is available around the clock to assist you in emergencies and answer your questions.',
		img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
	},
	{
		city: 'Join a Lifesaving Community',
		// info: 'When you join ResQ, you become part of a community of heroes who are actively contributing to saving lives.',
		img: 'https://media.istockphoto.com/id/1256555401/vector/blood-donation-concept.jpg?s=612x612&w=0&k=20&c=OKESllI31Ny0H4CTABQgayI230R2o4tvCEE8RkSULpI=',
	},
];


class Products extends Component {

	render() {
		return (
			<>
				<Slider slides={slides} />
			</>
		)
	}
}

export default Products