import { useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { ProjectsContext } from '../../Context/ProjectsContext';
import ProjectsFilter from './ProjectsFilter';
import { Slide } from 'react-awesome-reveal';

const ProjectsGrid = () => {
	const {
		projects,
		searchProject,
		setSearchProject,
		searchProjectsByTitle,
		selectProject,
		setSelectProject,
		selectProjectsByCategory,
	} = useContext(ProjectsContext);

	return (
		<section className="pt-20 pb-5 z-[9] relative " id="projects">
			<Slide direction="left">
				<span className="green text-gray-200 text-xl font-bold">PROJECTS</span>
				<h1 className='text-gray-200 mb-2'>Search or Filter
				</h1>
			</Slide>
			<div className="">
				<div
					className="
                        flex
						justify-evenly
						sm:justify-evenly
						md:justify-between 
						lg:justify-between
						flex-wrap
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-ternary-dark
                                text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
				{selectProject
					? selectProjectsByCategory.map((project) => (
						<ProjectSingle
							id={project.id}
							title={project.title}
							category={project.categories}
							images={project.img}
							key={project.id}
							shortDesc={project.shortDesc}
						/>
					))
					: searchProject
						? searchProjectsByTitle.map((project) => (
							<ProjectSingle
								id={project.id}
								title={project.title}
								category={project.categories}
								images={project.img}
								key={project.id}
								shortDesc={project.shortDesc}
							/>
						))
						: projects.map((project) => (
							<ProjectSingle
								id={project.id}
								title={project.title}
								category={project.categories}
								images={project.img}
								key={project.id}
								shortDesc={project.shortDesc}
							/>
						))}
			</div>
		</section>
	);
};

export default ProjectsGrid;
