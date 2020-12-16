import { Transition } from '@headlessui/react';
import React from 'react';
import PageInfo from './PageInfo';

const SidePanel = ({
	isOpen,
	onDeletePage,
	onCreatePage,
	onUpdatePage,
	page,
	create,
	setIsOpen,
}: any) => {
	return (
		<div>
			<Transition
				show={isOpen}
				enter='transform transition ease-in-out duration-500 sm:duration-700'
				enterFrom='translate-x-full'
				enterTo='translate-x-0'
				leave='transform transition ease-in-out duration-500 sm:duration-700'
				leaveFrom='translate-x-0'
				leaveTo='translate-x-full'>
				{(ref) => (
					<div ref={ref} className='fixed inset-0 overflow-hidden'>
						<PageInfo
							onDeletePage={onDeletePage}
							onCreatePage={onCreatePage}
							onUpdatePage={onUpdatePage}
							pageInfo={page}
							create={create}
							onCloseClick={() => setIsOpen(!isOpen)}
						/>
					</div>
				)}
			</Transition>
		</div>
	);
};

export default SidePanel;
