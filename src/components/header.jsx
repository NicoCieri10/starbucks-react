import React from 'react'
import logo from '../image/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={logo} alt="logo.png" />
      </div>
      <nav className="header__navbar">
        <a className="header__navbar-link" href='/' >Inicio</a>
        <a className="header__navbar-link" href='/' >Cafe</a>
        <a className="header__navbar-link" href='/' >Sobre Nosotros</a>
        <a className="header__navbar-link" href='/' >Delivery</a>
      </nav>
      <i className="header__icon-0 bi bi-list"></i>
      <i className="header__icon-1 bi bi-person-circle"></i>
    </header>
  )
}

export default Header