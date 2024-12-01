import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 px-4 bg-gradient-to-r from-grey-500 via-blue-500 to-purple-500 shadow-md hover:shadow-lg transition-shadow font-medium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-16" alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-5 text-sm text-black-900">
        {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
          <NavLink
            key={index}
            to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? 'text-black font-bold' : 'text-gray-500'
              } hover:text-black transition`
            }
          >
            <p>{item}</p>
          </NavLink>
        ))}
      </ul>

      {/* Utility Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate('/collection');
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="Search"
        />

        {/* Profile Icon */}
        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate('/login'))}
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="Profile"
          />
          {token && (
            <div className="absolute hidden group-hover:block right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-gray-100 text-gray-600 rounded shadow">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p
                  onClick={() => navigate('/orders')}
                  className="cursor-pointer hover:text-black"
                >
                  Orders
                </p>
                <p onClick={logout} className="cursor-pointer hover:text-black">
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute -right-1 -bottom-1 w-4 text-center bg-black text-white rounded-full text-[8px] leading-4">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Backdrop */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setVisible(false)}
        ></div>
      )}

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-40 transform transition-transform duration-300 ${
          visible ? 'translate-x-0 w-64' : 'translate-x-full w-0'
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Close Button */}
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer border-b"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="Back"
            />
            <p>Close</p>
          </div>
          {/* Navigation Links */}
          {['HOME', 'COLLECTION', 'ABOUT', 'CONTACT'].map((item, index) => (
            <NavLink
              key={index}
              to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
              onClick={() => setVisible(false)}
              className={({ isActive }) =>
                `py-4 px-6 border-b text-sm ${
                  isActive ? 'text-black font-bold' : 'text-gray-700'
                } hover:bg-gray-100 transition`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
