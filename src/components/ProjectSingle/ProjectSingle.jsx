import ProjectGallery from '../ProjectsGrid/ProjectGallery';
import ProjectHeader from '../ProjectsGrid/ProjectHeader';
import ProjectInfo from '../ProjectsGrid/ProjectInfo';
import ProjectRelatedProjects from '../ProjectsGrid/ProjectRelatedProjects';
import { SingleProjectProvider } from '../../Context/SingleProjectContext';
import { motion } from 'framer-motion';

const ProjectSingle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-[7rem] sm:mt-[6rem]"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				{/* <ProjectRelatedProjects /> */}
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle;
