import { useEffect, useState } from 'react';

const PageInfo = ({
	onDeletePage,
	onCreatePage,
	onUpdatePage,
	pageInfo,
	create,
	onCloseClick,
}: any) => {
	const [page, setPage] = useState(pageInfo);
	const [checked, setChecked] = useState(pageInfo.isActive);

	const deletePage = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onDeletePage(page);
		onCloseClick();
	};

	const createPage = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onCreatePage({ ...page, publishedOn: new Date().toISOString() });
		onCloseClick();
		// console.log('JSON.stringify({ user })', JSON.stringify({ page }));
	};

	const updatePage = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onUpdatePage(page);
		onCloseClick();
		// console.log('JSON.stringify({ user })', JSON.stringify({ page }));
	};

	return (
		<div className='absolute inset-0 overflow-hidden'>
			<section
				className='absolute inset-y-0 right-0 pl-10 max-w-full flex'
				aria-labelledby='slide-over-heading'>
				<div className='relative w-screen max-w-md'>
					<div className='absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4'>
						<button
							onClick={onCloseClick}
							className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'>
							<span className='sr-only'>Close panel</span>
							<svg
								className='h-6 w-6'
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								aria-hidden='true'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>
					<div className='h-full flex flex-col py-6 bg-white shadow-xl overflow-hidden'>
						<div className='mt-12 sm:mt-0'>
							<div className='md:grid md:grid-cols-1 md:gap-6'>
								<div className='mt-12 md:mt-0 md:col-span-2'>
									<form>
										<div className='px-4 py-5 bg-white sm:p-6'>
											<div className='grid grid-cols-6 gap-6'>
												<div className='col-span-6 sm:col-span-6'>
													<label
														htmlFor='title'
														className='block text-sm font-medium text-gray-700'>
														Title
													</label>
													<input
														type='text'
														name='page[title]'
														defaultValue={pageInfo.title}
														onChange={(e) =>
															setPage({ ...page, title: e.target.value })
														}
														className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													/>
												</div>

												<div className='col-span-6 sm:col-span-6'>
													<label
														htmlFor='description'
														className='block text-sm font-medium text-gray-700'>
														Description
													</label>
													<input
														type='text'
														name='page[description]'
														defaultValue={pageInfo.description}
														onChange={(e) =>
															setPage({ ...page, description: e.target.value })
														}
														className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													/>
												</div>

												<div className='col-span-3 sm:col-span-3'>
													<label
														htmlFor='type'
														className='block text-sm font-medium text-gray-700'>
														Type
													</label>
													<input
														type='number'
														name='page[type]'
														defaultValue={pageInfo.type}
														onChange={(e) =>
															setPage({ ...page, type: e.target.value })
														}
														className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
													/>
												</div>

												<div className='col-span-3 sm:col-span-3 flex items-center justify-center'>
													<div className='flex items-center h-5'>
														<input
															type='checkbox'
															name='page[isActive]'
															defaultChecked={pageInfo.isActive}
															onChange={() => {
																setChecked(!checked);
																setPage({ ...page, isActive: !checked });
															}}
															className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
														/>
													</div>
													<div className='ml-3 text-sm'>
														<label className='font-medium text-gray-700'>
															Is Active
														</label>
													</div>
												</div>

												<div className='col-span-3 sm:col-span-3 text-left'>
													<label className='block text-sm font-medium text-gray-700'>
														{pageInfo?.publishedOn
															? 'Published On'
															: 'Will published on'}
													</label>
													<p className='leading-relaxed mb-3 w-full h-3'>
														{pageInfo?.publishedOn
															? new Date(
																	pageInfo.publishedOn
															  ).toLocaleDateString()
															: new Date().toLocaleDateString()}
													</p>
												</div>
											</div>
											<div className='flex items-center justify-center'>
												{!create && (
													<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
														<button
															onClick={deletePage}
															className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
															Delete
														</button>
													</div>
												)}
												<div className='px-4 py-3 bg-gray-50 text-right sm:px-6'>
													{!create && (
														<button
															onClick={updatePage}
															className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
															Update
														</button>
													)}
													{create && (
														<button
															onClick={createPage}
															className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
															Create
														</button>
													)}
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PageInfo;
