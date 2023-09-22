
let navbar_items = [
	{
		name: 'Home',
		icon: 'fas fa-home',
		link: ''
	},
	{
		name: 'About',
		icon: 'fas fa-address-card',
		link: 'about'
	},
	{
		name: 'FAQ',
		icon: 'fas fa-question-circle',
		link: 'faq'
	},
	{
		name: 'Contact',
		icon: 'fas fa-phone-alt',
		link: 'contact'
	}
]

let navbar_accounts = [
	{
		link: 'https://www.facebook.com/',
		icon: 'fab fa-facebook'
	},
	{
		link: 'https://www.instagram.com/',
		icon: 'fab fa-instagram'
	},
	{
		link: 'https://twitter.com/',
		icon: 'fab fa-twitter'
	}
]

let products = [
	{
		img: require('../../images/pics/products/1.png'),
		alt: 'product 1',
		title: 'TCL Smart TV',
		oldp: '7999 DH',
		newp: '6500 DH'
	},
	{
		img: require('../../images/pics/products/2.png'),
		alt: 'product 2',
		title: 'Toshiba Smart TV',
		oldp: '9000 DH',
		newp: '8500 DH'
	},
	{
		img: require('../../images/pics/products/3.png'),
		alt: 'product 3',
		title: 'Toshiba Full HD Smart TV',
		oldp: '10000 DH',
		newp: '9500 DH'
	},
	{
		img: require('../../images/pics/products/5.png'),
		alt: 'product 4',
		title: 'Toshiba HD Smart TV',
		oldp: '9500 DH',
		newp: '8500 DH'
	},
	{
		img: require('../../images/pics/products/6.png'),
		alt: 'product 5',
		title: 'Samsung TV Full HD Smart TV',
		oldp: '7999 DH',
		newp: '6500 DH'
	},
	{
		img: require('../../images/pics/products/7.png'),
		alt: 'product 6',
		title: 'Panasonic 4K Smart TV',
		oldp: '9000 DH',
		newp: '8000 DH'
	},
	{
		img: require('../../images/pics/products/9.png'),
		alt: 'product 7',
		title: 'Toshiba HD Smart TV',
		oldp: '7500 DH',
		newp: '7000 DH'
	}
]

let top_blogs = [
	{
		img: require('../../images/pics/blogs/1.jpg'),
		alt: 'blog 1'
	},
	{
		img: require('../../images/pics/blogs/2.jpg'),
		alt: 'blog 2'
	},
	{
		img: require('../../images/pics/blogs/3.jpg'),
		alt: 'blog 3'
	},
	{
		img: require('../../images/pics/blogs/5.jpg'),
		alt: 'blog 4'
	},
	{
		img: require('../../images/pics/blogs/4.jpg'),
		alt: 'blog 5'
	}
]

let recent_blogs = [
	{
		img: require('../../images/pics/blogs/6.jpg'),
		alt: 'blog 6',
		mar: 'mb-3'
	},
	{
		img: require('../../images/pics/blogs/7.jpg'),
		alt: 'blog 7',
		mar: ''
	}
]

let faq_items = [
	{
		id_one: 'headingOne',
		data_bs_target: '#collapseOne',
		aria_controls: 'collapseOne',
		id_two: 'collapseOne',
		aria_labelledby: 'headingOne',
		title: 'What are the types of Blood Groups?',
		info: 'There are 8 main blood groups.They are A+,A-,B+,B-,O+,O-,AB+,AB-. Your blood group is determined by the genes you inherit from your parents. Each group can be either RhD positive or RhD negative, which means in total there are 8 blood groups.Blood transfusions must be carefully matched to avoid adverse reactions. People with RhD positive blood  can receive either RhD positive or RhD negative blood, while those with RhD negative blood can only receive RhD negative blood.Its essential to know your blood group for medical purposes and emergencies. Blood donation and transfusion play a critical role in saving lives and providing essential medical treatments.',
		show: true
	},
	{
		id_one: 'headingTwo',
		data_bs_target: '#collapseTwo',
		aria_controls: 'collapseTwo',
		id_two: 'collapseTwo',
		aria_labelledby: 'headingTwo',
		title: 'Why is blood donation important?',
		info: 'Blood donation is important because it saves lives. Donated blood is used for medical treatments, surgeries, emergencies, and to support patients with various medical conditions, including those with chronic diseases and trauma victims.',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseThree',
		aria_controls: 'collapseThree',
		id_two: 'collapseThree',
		aria_labelledby: 'headingThree',
		title: 'Can I donate blood if I have certain medical conditions or take medications?',
		info: 'It depends on the specific medical condition and medications. Some conditions and medications may restrict blood donation, while others may not be a concern. It is essential to disclose all medical information during the screening process to determine eligibility.',
		show: false
	},
	{
		id_one: 'headingThree',
		data_bs_target: '#collapseFour',
		aria_controls: 'collapseFour',
		id_two: 'collapseFour',
		aria_labelledby: 'headingFour',
		title: 'Is blood donation safe?',
		info: 'Yes, blood donation is generally safe for healthy individuals who meet the eligibility criteria. Blood banks and donation centers follow strict protocols to ensure the safety of donors and recipients.',
		show: false
	},
	{
		id_one: 'headingFive',
		data_bs_target: '#collapseFive',
		aria_controls: 'collapseFive',
		id_two: 'collapseFive',
		aria_labelledby: 'headingFive',
		title: 'Is organ donation possible after death?',
		info: 'Yes, deceased organ donation is common and can save multiple lives. Organ retrieval occurs only after brain death or circulatory death has been confirmed, and consent is obtained from the donors family or through the donors expressed wishes.',
		show: false
	},
	{
		id_one: 'headingSix',
		data_bs_target: '#collapseSix',
		aria_controls: 'collapseSix',
		id_two: 'collapseSix',
		aria_labelledby: 'headingSix',
		title: 'Can organ donation occur while the donor is alive?',
		info: 'Yes, living organ donation is possible for certain organs, such as kidneys, parts of the liver, and partial lung donations. Living donors undergo thorough medical and psychological evaluations to ensure they can donate safely.',
		show: false
	}
]

let contact = [
	{
		type: 'e-mail',
		info: 'support@resq.com',
		icon: 'fas fa-envelope'
	},
	{
		type: 'phone-number',
		info: '608-357-2697',
		icon: 'fas fa-phone-alt'
	},
	{
		type: 'address-location',
		info: '255 Alphatonia Road, Lambells Lagoon NT 0822, Australia',
		icon: 'fas fa-map-marker-alt'
	}
]

export {
	navbar_items,
	navbar_accounts,
	products,
	top_blogs,
	recent_blogs,
	faq_items,
	contact
}