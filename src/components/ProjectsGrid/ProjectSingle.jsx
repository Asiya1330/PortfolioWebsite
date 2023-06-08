import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, images, shortDesc, id }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
            {/* /projects/single-project */}
			<Link to={`/projects/${id}`} aria-label="Single Project" className='no-underline'>
				<div className=" shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-dark">
					<div>
						<img
							src={images[0]}
							className=" border-none"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6 flex flex-col">
						<p className="overflow-hidden break-words whitespace-nowrap text-ellipsis font-general-medium text-lg md:text-xl text-ternary-light mb-2">
							{title}
						</p>
						<span className="text-sm text-ternary-light">
							{shortDesc}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
