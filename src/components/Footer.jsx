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
        <BtnHeader content={'Inicio'} />
        <BtnHeader content={'Cafe'} />
        <BtnHeader content={'Sobre Nosotros'} />
        <BtnHeader content={'Delivery'} />
      </nav>
      <i className="header__icon-0 bi bi-list"></i>
      <i className="header__icon-1 bi bi-person-circle"></i>
    </header>
  )
}

export default Header