import React from 'react';
import '../css/main.css';
import logo from '../image/logo.png';


const Main = () => {
  return (
    <section className="main">
      <div className="main__container-title">
        <h1 className="main__title">
          No solo es Cafe es <span className="main__title--green">Starbuks</span>
        </h1>
        <p className="main__text">
          Cada día, acudimos a trabajar con la esperanza de
          conseguir dos cosas: compartir el mejor café con
          nuestros amigos y contribuir a que el mundo sea un
          poco mejor. Así era cuando abrió la primera tienda
          Starbucks en 1971, y así continúa siendo hoy.
        </p>
      </div>
      <div className="main__container-logo">
        <img className="main__logo" src={logo} alt="logo.png" />
      </div>
    </section>
  )
}

export default Main