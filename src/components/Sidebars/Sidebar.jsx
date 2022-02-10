import { Link } from 'react-router-dom';

import SidebarData from '../../data/SidebarData';
import SidebarItem from './SidebarItem';

export default function Sidebar({ title }) {
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <Link
            className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="#"
          >
            {title}
          </Link>

          <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
            {SidebarData.map((item) => (
              <SidebarItem title={item.title} data={item.data} />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
