import React from 'react';
import PropTypes from 'prop-types';
import UserDropdown from '../Dropdowns/UserDropdown';

export default function Navbar({ title }) {
  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <span className=" text-sm uppercase hidden lg:inline-block font-semibold text-white">
            {title}
          </span>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: 'Dashboard',
};

Navbar.propTypes = {
  title: PropTypes.string,
};
