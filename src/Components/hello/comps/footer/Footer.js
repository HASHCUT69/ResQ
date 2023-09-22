
import React, { Component } from 'react'
import './Footer.css'
import { navbar_items, navbar_accounts } from '../helpers/Data'

class Footer extends Component {
	display_navbar_items = _ => {
		let items = navbar_items.map(item => {
			return (
				<a className="d-block mb-1 text-muted" href={`#${item.link}`} key={Math.random()}><i className={`${item.icon} me-2`}></i>{item.name}</a>
			)
		})
		return items
	}

	display_navbar_accounts = _ => {
		let accounts = ['Facebook', 'Instagram', 'Twitter']
		let items = navbar_accounts.map((item, index) => {
			return (
				<a className="text-capitalize d-block text-muted mb-1" href={item.link} target='_blank' rel="noreferrer" key={Math.random()}>
					<i className={`${item.icon} me-2`}></i>{accounts[index]}
				</a>
			)
		})
		return items
	}

	render() {
		return (
			<footer className='footer py-5 bg-light'>
				<div className='container'>
					<div className='row'>
						<div className='c col-lg-4 col-12 my-auto'>
							<div className='s first-side text-lg-start text-center mb-lg-0 mb-5'>
								<div className='first-sub-side'>
									<h3 className='brand-name mb-3' >Res<span>Q</span></h3>
									<p>We invite you to join our journey, a journey filled with compassion, resilience, and the undeniable charm of humanity united for a common cause.</p>
								</div>
								<div className='second-sub-side'>
									<p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a href="#">ResQ</a></p>
								</div>
							</div>
						</div>

						<div className='c col-lg-2 col-12'>
							<div className='s second-side text-lg-start text-center mb-lg-0 mb-5'>
								<div className='title'>
									<h5 className='text-capitalize mb-4'>quick links</h5>
								</div>
								<div className='links'>
									{this.display_navbar_items()}
								</div>
							</div>
						</div>

						<div className='c col-lg-2 col-12'>
							<div className='s third-section text-lg-start text-center mb-lg-0 mb-5'>
								<div className='title'>
									<h5 className='text-capitalize mb-4'>follow us</h5>
								</div>
								<div className='links'>
									{this.display_navbar_accounts()}
									<a className="text-capitalize d-block text-muted " href="https://pinterest.com/" target="_blank" rel="noreferrer">
										<i className='fab fa-pinterest me-2'></i> pinterest
									</a>
									<a className="text-capitalize d-block text-muted " href="https://github.com/" target="_blank" rel="noreferrer">
										<i className='fab fa-github me-2'></i> github
									</a>
									<a className="text-capitalize d-block text-muted " href="https://youtube.com/" target="_blank" rel="noreferrer">
										<i className='fab fa-youtube me-2'></i> Youtube
									</a>
								</div>
							</div>
						</div>

						<div className='c col-lg-4 col-12 my-auto'>
							<div className='s fourth-section text-lg-start text-center mb-lg-0 mb-5'>
								<p className='text-capitalize lh-2'>this website has been created and designed by <span className="owner" href="https://github.com/HASHCUT69/ResQ">HasCut</span>.
									open sourced at <a href="https://github.com/HASHCUT69/ResQ" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>. as a part of our mini project in college.</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer
