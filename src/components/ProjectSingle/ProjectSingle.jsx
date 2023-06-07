import ProjectGallery from '../ProjectsGrid/ProjectGallery';
import ProjectHeader from '../ProjectsGrid/ProjectHeader';
import ProjectInfo from '../ProjectsGrid/ProjectInfo';
import { motion } from 'framer-motion';
import { ProjectsContext } from '../../Context/ProjectsContext';
import { useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

const ProjectSingle = () => {
	const { projects } = useContext(ProjectsContext)
	const [filteredProject, setFilteredProject] = useState({});
	const params = useParams();
	useEffect(() => {
		const updated = projects.filter(project => project.id === parseInt(params.id));
		setFilteredProject(updated[0]);
	}, [params,projects]);

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
			<ProjectHeader filteredProject={filteredProject} />
			<ProjectGallery filteredProject={filteredProject} />
			<ProjectInfo filteredProject={filteredProject} />
		</motion.div>
	);
};

export default ProjectSingle;
