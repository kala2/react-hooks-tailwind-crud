const Skeleton = () => {
	const loadingLayout = [
		{
			id: 1,
		},
		{
			id: 2,
		},
		{
			id: 3,
		},
		{
			id: 4,
		},
		{
			id: 5,
		},
		{
			id: 6,
		},
	];

	return (
		<div className='flex flex-wrap -m-4'>
			{loadingLayout.map((layout) => (
				<div className='xl:w-1/3 md:w-1/2 p-4' key={layout.id}>
					<div className='border p-6 h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
						{/* <div className='lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center'></div> */}
						{/* <div className='p-6'> */}
						<h2 className='text-lg  font-medium title-font mb-2'></h2>
						<h1 className='w-1/2 mb-4 h-6 animate-pulse bg-gray-500'></h1>
						<p className='leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400'></p>
						<p className='leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400'></p>
						<p className='leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400'></p>
						<div className='flex items-center flex-wrap'>
							<a className='bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0'></a>
							<span className='bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1'></span>
						</div>
						{/* </div> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Skeleton;
