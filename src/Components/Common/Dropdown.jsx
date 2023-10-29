import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { logout } from '../../services/operations/authAPI';
import { useDispatch } from 'react-redux';

const Dropdown = () => {
const [isOpen, setIsOpen] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout(navigate));
  };

  const userString = localStorage.getItem("user");
  const user = JSON.parse(userString);
  const UserRole = user?.role;

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Profile{' '}
        <svg
          className={`w-2.5 h-2.5 ml-2.5 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="z-10 absolute left-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            <li>
              <Link to={UserRole === 'User' ? '/userdashboard' : '/dashboard'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </Link>
            </li>
            <li>
              <Link  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleLogout}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
