import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

const ProjectInfo = ({ filteredProject }) => {
	const SocialSharing = [
		{
			id: 1,
			name: 'Twitter',
			icon: <FiTwitter/>,
			url: 'https://twitter.com/',
		},
		{
			id: 2,
			name: 'Instagram',
			icon: <FiInstagram />,
			url: 'https://instagram.com/',
		},
		{
			id: 3,
			name: 'Facebook',
			icon: <FiFacebook />,
			url: 'https://facebook.com/',
		},
		{
			id: 4,
			name: 'LinkedIn',
			icon: <FiLinkedin />,
			url: 'https://linkedin.com/',
		},
		{
			id: 5,
			name: 'Youtube',
			icon: <FiYoutube />,
			url: 'https://www.youtube.com/',
		},
	]
	return (
		<div className="block sm:flex gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-light mb-2">
						About Client
					</p>
					<ul className="leading-loose">
						<li className="font-general-regular text-ternary-light">
							<span>Name: </span>
							<a href="/#home"
								className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
								aria-label="Project Website and Phone"
							>{filteredProject.title}</a>
						</li>
						<li className="font-general-regular text-ternary-light">
							<span>Website: </span>
							<a href={filteredProject.link}
								className='hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300'
								aria-label="Project Website and Phone"
							>{filteredProject.link}</a>
						</li>
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
						Objective
					</p>
					<p className="font-general-regular text-ternary-light">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
						Tools & Technologies
					</p>
					<p className="font-general-regular text-ternary-light">
						{filteredProject?.technologies?.join(
							', '
						)}
					</p>
				</div>

				{/* Single project social sharing */}
				<div>
					<p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
						Share This
					</p>
					<div className="flex items-center gap-3 mt-5">
						{SocialSharing.map(
							(social) => {
								return (
									<a
										key={social.id}
										href={social.url}
										target="__blank"
										aria-label="Share Project"
										className="bg-ternary-dark text-gray-400 hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
									>
										<span className="text-lg lg:text-2xl">
											{social.icon}
										</span>
									</a>
								);
							}
						)}
					</div>
				</div>
			</div>

			{/*  Single project right section */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular text-primary-light text-2xl font-bold mb-7">Challenge</p>
				
				<p className="font-general-regular mb-5 text-lg text-ternary-light">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus, aliquam quo cumque ipsum fugiat nostrum adipisci fuga nisi illo iste architecto accusantium maiores! Nobis provident excepturi atque vel eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, amet hic? Quas, itaque harum quo dolore repellat ipsum? Minus nihil harum dicta provident, mollitia porro atque exercitationem ipsam. Quisquam, perspiciatis.
				</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi soluta ex, reiciendis eos quam quas nemo pariatur quos cupiditate ducimus ut asperiores fuga, nisi aperiam sed eum. Earum, temporibus dolorem.</p>
				<p className="font-general-regular mb-5 text-lg text-ternary-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi soluta ex, reiciendis eos quam quas nemo pariatur quos cupiditate ducimus ut asperiores fuga, nisi aperiam sed eum. Earum, temporibus dolorem.</p>

				<p className="font-general-regular mb-5 text-lg text-ternary-light">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ducimus, aliquam quo cumque ipsum fugiat nostrum adipisci fuga nisi illo iste architecto accusantium maiores! Nobis provident excepturi atque vel eaque. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, amet hic? Quas, itaque harum quo dolore repellat ipsum? Minus nihil harum dicta provident, mollitia porro atque exercitationem ipsam. Quisquam, perspiciatis.
				</p>

			</div>
		</div>
	);
};

export default ProjectInfo;
