import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              AirtelTigo BIOSIOMREG .v2
            </Link>
          </div>
          <div
            className="lg:flex flex-grow items-center bg-white bg-opacity-0 lg:shadow-none"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <i className="fas fa-arrow text-blue-500"></i> AirtelTigo Ghana
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
