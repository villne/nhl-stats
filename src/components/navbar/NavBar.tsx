import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import logo from '../../assets/logo.svg';

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <ul className='navbar-list'>
          <li>
            <Link to='/'>
              <img src={logo} alt='logo' className='img-logo'></img>
            </Link>
            <Link to='/standings'>Standings</Link>
            <Link to='/cards'>Player Cards</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
