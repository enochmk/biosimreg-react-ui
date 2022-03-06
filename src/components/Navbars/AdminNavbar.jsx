import React from 'react';
import { useSelector } from 'react-redux';

import UserDropdown from '../Dropdowns/UserDropdown';

export default function Navbar() {
  const title = useSelector((state) => state.navbar.title);
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 mb-4">
      <div className="w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
        <span className=" text-sm uppercase hidden lg:inline-block font-semibold text-white">
          {title}
        </span>
        <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
          <UserDropdown
            firstName={user?.firstName}
            lastName={user?.lastName}
            role={user?.role.name}
          />
        </ul>
      </div>
    </nav>
  );
}
