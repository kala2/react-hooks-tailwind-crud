import { IPage } from '../types/page';

const PagesList = ({
    pages,
    setCreate,
    setPage,
    setIsOpen,
    isOpen
}: any) => {
	return (
        <>
            {pages &&
                pages?.map((responsivePages: IPage) => (
                    <div
                    className='xl:w-1/3 md:w-1/2 p-4'
                    key={responsivePages.id}
                    onClick={() => {
                        setCreate(false);
                        setPage(responsivePages);
                        setIsOpen(!isOpen);
                    }}>
                    <div className='border border-gray-300 p-6 rounded-lg transform hover:shadow-2xl cursor-pointer transition ease-out duration-500'>
                        <h2 className='text-lg  font-medium title-font mb-2'>
                            {responsivePages.title}{' '}
                        </h2>
                        <p className='leading-relaxed text-base'>
                            {responsivePages.description}
                        </p>

                        <div className='text-center mt-2 leading-none flex justify-between w-full'>
                            <span className=' mr-3 inline-flex items-center leading-none text-sm  py-1 '>
                                <svg
                                    className=' fill-current w-4 h-4 mr-2 text-blue-500'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'>
                                    <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z' />
                                </svg>
                                {new Date(responsivePages.publishedOn).toLocaleDateString()}
                            </span>
                            <span className=' inline-flex items-center leading-none text-sm'>
                                Type: {responsivePages.type}
                                {', '}
                                Active: {responsivePages.isActive ? 'Yes' : 'No'}
                            </span>
                        </div>
                    </div>
                </div>
                ))
            }
        </>
	);
};

export default PagesList;
