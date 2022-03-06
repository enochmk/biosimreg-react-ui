import { useDispatch } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';

import { logout } from '../../features/auth/authSlice';
import avatarImage from '../../assets/img/profile.png';

const UserDropdown = ({ firstName, lastName, role }) => {
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex="0" className="items-center flex">
        <span className="w-12 h-12 text-sm  bg-blueGray-200 inline-flex items-center justify-center rounded-full">
          <img
            alt="profile"
            className="w-full rounded-full align-middle border-none shadow-lg"
            src={avatarImage}
          />
        </span>
      </button>
      <ul
        tabIndex="0"
        className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-1"
      >
        <li className="items-center justify-center">
          <label className="font-bold">
            {firstName} {lastName}
          </label>
          <label className="font-thin">{role}</label>
        </li>
        <div className="divider"></div>
        <li>
          <button onClick={handleLogout}>
            <FaSignOutAlt className="mr-2" />
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
