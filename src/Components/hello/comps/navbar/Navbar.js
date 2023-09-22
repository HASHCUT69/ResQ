
import React, { Component } from 'react'
import './Navbar.css'
import { navbar_items } from '../helpers/Data'
import { navbar_accounts } from '../helpers/Data'
import { Link } from 'react-router-dom'



class Navbar extends Component {
	display_navbar_items = _ => {
		let items = navbar_items.map(item => {
			return (
				<li className="nav-item link" key={Math.random()}>
					<a className="nav-link p-md-0 py-md-1 px-md-2 me-md-2" href={`#${item.link}`}>
						<i className={`${item.icon} me-2`}></i>{item.name}
					</a>
				</li>
			)
		});

		// Add the "Donate" list item using the spread operator
		items = [
			...items,
			<li className="nav-item link" key={Math.random()}>
				<Link className="nav-link p-md-0 py-md-1 px-md-2 me-md-2" to='/donor'>
					<i className="fas fa-blog me-2"></i>Donate
				</Link>
			</li>,
			<li className="nav-item link" key={Math.random()}>
				<Link className="nav-link p-md-0 py-md-1 px-md-2 me-md-2" to='/receiver'>
					<i className="fas fa-blog me-2"></i>Find a donar
				</Link>
			</li>
		];

		return items;
	}


	render() {
		return (
			<nav className="navbar navbar-expand-md sticky-top active py-1 mb-5" id='navbar'>
				<div className='container'>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon">Ξ</span>
					</button>
					<div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							{this.display_navbar_items()}
						</ul>
						<ul className="navbar-nav ml-auto">
							<li><Link to="/home" className="btn btn-outline-dark btn-sm me-2">Login</Link></li>
							<li><Link to="/signup" className="btn btn-outline-dark btn-sm me-2">Sign up</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar