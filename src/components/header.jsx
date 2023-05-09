import React from 'react';
import '../css/header.css';
import BtnHeader from './BtnHeader.jsx';
import logo from '../image/logo.png';


const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={logo} alt="logo.png" />
      </div>
      <nav className="header__nav">
        <BtnHeader class={'header__nav-link'} content={'Inicio'} href={'#'} />
        <BtnHeader class={'header__nav-link'} content={'Cafe'} href={'#'} />
        <BtnHeader class={'header__nav-link'} content={'Sobre Nosotros'} href={'#'} />
        <BtnHeader class={'header__nav-link'} content={'Delivery'} href={'#'} />
      </nav>
      <i className="header__icon-0 bi bi-list"></i>
      <i className="header__icon-1 bi bi-person-circle"></i>
    </header>
  )
}

export default Header