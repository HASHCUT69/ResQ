
import React, { Component } from 'react'
import './Faq.css'
import { faq_items } from '../helpers/Data'

const Faq = () => {

	const display_arrocdion_items = () => {
		let items = faq_items.map(item => {
			return (
				<div className="accordion-item" key={Math.random()}>
					<h2 className="accordion-header" id={item.id_one}>
						<button className="accordion-button text-capitalize" type="button" data-bs-toggle="collapse" data-bs-target={item.data_bs_target} aria-expanded="true" aria-controls={item.aria_controls}>{item.title}</button>
					</h2>
					<div id={item.id_two} className={`accordion-collapse collapse ${item.show ? 'show' : ''}`} aria-labelledby={item.aria_labelledby} data-bs-parent="#accordionExample">
						<div className="accordion-body">
							{item.info}
						</div>
					</div>
				</div>
			)
		})
		return items
	}

	// render() {
	return (
		<section className='faq py-5 mb-5' id='faq'>
			<div className='container'>
				<div className='title'>
					<h2 className='text-capitalize text-center mb-5 position-relative p-3'>FAQ</h2>
				</div>

				<div className="accordion shadow-lg" id="accordionExample">
					{display_arrocdion_items()}
				</div>
			</div>
		</section>
	)
	// }
}

export default Faq