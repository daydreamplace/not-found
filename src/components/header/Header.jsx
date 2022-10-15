import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo2.png';
import styled from 'styled-components';

const Header = () => {
  const navList = [
    {
      path: '/about',
      title: 'ABOUT',
    },
    {
      path: '/xr-business',
      title: 'XR BUSINESS',
    },
    {
      path: '/news',
      title: 'NEWS',
    },
    {
      path: '/service',
      title: 'SERVICE',
    },
    {
      path: '/contact',
      title: 'CONTACT',
    },
    {
      path: '/media',
      title: 'MEDIA',
    },
    {
      path: '/login',
      title: 'LOGIN',
    },
  ];

  return (
    <Nav>
      <div className='nav'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        {navList.map((nav) => {
          return (
            <NavList key={nav.title} to={nav.path} className={({ isActive }) => (isActive ? 'active' : '')}>
              {nav.title}
            </NavList>
          );
        })}
      </div>
    </Nav>
  );
};

const Nav = styled.div`
  z-index: 9999;
  position: fixed;
  width: 100%;
  padding: 24px;

  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.hyperMint};

  img {
    width: 150px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const NavList = styled(NavLink)`
  padding: 8px 20px;

  &.active {
    border: 2px solid ${({ theme }) => theme.hyperMint};
    border-radius: 50px;
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.hyperMint};
    border-radius: 50px;
  }
`;

export default Header;
