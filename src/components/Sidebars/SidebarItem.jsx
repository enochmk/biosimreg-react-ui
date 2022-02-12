import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarItem = ({ title, data }) => {
  const location = useLocation();

  return (
    <>
      <hr className="my-4 md:min-w-full" />
      <h6 className="md:min-w-full text-gray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
        {title}
      </h6>

      <ul className="md:flex-col md:min-w-full flex flex-col list-none">
        {data.map((item, index) => (
          <li key={index} className="items-center">
            <Link
              className={
                'text-xs uppercase py-3 font-bold block ' +
                (location.pathname === item.link
                  ? 'text-blue-500 hover:text-blue-600'
                  : 'text-gray-700 hover:text-gray-500')
              }
              to={item.link}
            >
              <i
                className={
                  `${item.icon} mr-2 text-sm ` +
                  (location.pathname === item.link
                    ? 'opacity-75'
                    : 'text-gray-300')
                }
              ></i>{' '}
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarItem;
