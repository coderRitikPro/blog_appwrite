import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  console.log("i am header");
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', slug: '/', active: true },
    { name: 'Login', slug: '/login', active: !authStatus },
    { name: 'Signup', slug: '/signup', active: !authStatus },
    { name: 'All Posts', slug: '/all-posts', active: authStatus },
    { name: 'Add Post', slug: '/add-post', active: authStatus },
  ];

  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          {/* Logo */}
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <button
            className='text-white block md:hidden focus:outline-none'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Nav Items */}
          <ul
            className={`${
              menuOpen ? 'block' : 'hidden'
            } md:flex md:ml-auto w-full md:w-auto bg-gray-500 md:bg-transparent`}
          >
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='md:mr-4'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='block px-4 py-2 text-white hover:bg-blue-100 hover:text-gray-800 rounded-full transition duration-200 md:inline-block md:px-6 md:py-2'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='md:mr-4'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
