import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { createPage, deletePage, getPages, updatePage } from './api/pages';
import { IPage } from './types/page';
import Skeleton from './components/Skeleton';
import BackgroundOverlay from './components/BackgroundOverlay';
import PagesList from './components/PagesList';
import Header from './components/Header';
import SidePanel from './components/SidePanel';

const INITIALSTATE = {
  title: '',
  description: '',
  type: 0,
  isActive: false,
  id: 0,
  publishedOn: new Date().toLocaleDateString(),
}

const App: React.SFC = () => {
	const [page, setPage] = useState<IPage>(INITIALSTATE);
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [pages, setPages] = useState<IPage[]>([]);
	const [create, setCreate] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			getPages().then((pages: IPage[]) => {
				setPages(pages);
				setLoading(false);
			});
		}, 3000);
	}, []);

	const onDeletePage = (pageDeleted: IPage) => {
		deletePage(pageDeleted.id).then(() =>
			setPages(pages.filter((page) => page.id !== pageDeleted.id))
		);
	};

	const onCreatePage = (pageCreated: IPage) => {
		createPage(pageCreated).then((result: IPage) => {
			setPages([...pages, result]);
		});
	};

	const onUpdatePage = (pageUpdated: IPage) => {
		const index = pages.findIndex((page) => page.id === pageUpdated.id);
		index !== -1 &&
			updatePage(pageUpdated).then(() => {
				const pagesUpdated = pages.map((page) =>
					page.id === pageUpdated.id ? { ...pageUpdated } : page
				);
				setPages(pagesUpdated);
			});
	};

	return (
		<div className='App'>
			<Header />
			<main>
				<div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
					<div className='px-4 py-6 sm:px-0'>
						<div className='border-4 border-dashed border-gray-200 rounded-lg'>
							<section className='text-gray-700 body-font'>
								<div className='container px-5 py-10 mx-auto'>
									{!isLoading && pages && (
										<button
											className='transform hover:shadow-2xl transition ease-out duration-500 mb-10 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
											onClick={() => {
												setCreate(true);
                        setIsOpen(!isOpen);
                        setPage(INITIALSTATE)
											}}>
											New Page
										</button>
									)}
									<div>{pages && pages.length === 0 && <Skeleton />}</div>

									<div className='flex flex-wrap -m-4'>
										{!isLoading && (
											<PagesList
												setCreate={setCreate}
												setPage={setPage}
												setIsOpen={setIsOpen}
												isOpen={isOpen}
												pages={pages}
											/>
										)}
										{isOpen && <BackgroundOverlay />}
										<SidePanel
											isOpen={isOpen}
											onDeletePage={onDeletePage}
											onCreatePage={onCreatePage}
                      onUpdatePage={onUpdatePage}
                      page={page}
                      create={create}
                      setIsOpen={setIsOpen}
										/>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default App;
