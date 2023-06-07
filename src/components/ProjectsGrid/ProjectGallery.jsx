
const ProjectGallery = ({ filteredProject }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{filteredProject?.img?.map((img, index) =>
			(
				<div className="mb-10 sm:mb-0" key={index}>
					<img
						src={img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={filteredProject.title}
						key={filteredProject.id}
					/>
				</div>
			)
			)}
		</div>
	);
};

export default ProjectGallery;
