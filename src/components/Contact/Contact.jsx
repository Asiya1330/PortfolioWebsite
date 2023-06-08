import { motion } from 'framer-motion';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import { Slide } from 'react-awesome-reveal';

const Contact = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container"
			id='contact'
		>
			 <Slide direction="left">
                <span className="green text-gray-200 text-xl font-bold">CONTACT US</span>
                <h1 className='text-gray-200 pt-0 mb-2'>Write Us Anything</h1>
            </Slide>
			<div className='mx-auto flex flex-col-reverse md:flex-row '>
			<ContactForm />
			<ContactDetails />
			</div>
		</motion.div>
	);
};

export default Contact;
