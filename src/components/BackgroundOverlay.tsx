const BackgroundOverlay = () => {
	return (
		<div className='fixed inset-0 overflow-hidden'>
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
					aria-hidden='true'></div>
			</div>
		</div>
	);
};

export default BackgroundOverlay;
