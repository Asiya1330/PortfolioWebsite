import { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import SingleProjectContext from '../../Context/SingleProjectContext';

const ProjectSingleHeader = ({ filteredProject }) => {
	const { singleProjectData } = useContext(SingleProjectContext);

	return (
		<div>
			<div className='mb-4'>
				<div className='flex justify-between items-center'>
					<div className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-light ">
						{filteredProject?.title}
					</div>
					{filteredProject?.link &&
						<a href={filteredProject?.link} className='border-2 px-4 py-2 border-solid rounded text-white' target='_blank' rel="noreferrer" >Live Demo</a>
					}
				</div>
				<div className='text-left text-gray-50 text-sm'>{filteredProject.shortDesc}</div>
			</div>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-light">
						{singleProjectData.ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-light">
						{singleProjectData.ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;
