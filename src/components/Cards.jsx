import React from 'react';
import '../css/cards.css';
import card_1 from '../image/card-1.png';
import card_2 from '../image/card-2.png';
import card_3 from '../image/card-3.png';
import card_4 from '../image/card-4.png';

const Cards = () => {
    return (
        <section className="cards">
            <div className="cards__card">
                <div className="cards__card-circle">5%</div>
                <img className="cards__card-img" src={card_1} alt="card-1.png" />
                <div className="cards__container-text">
                    <h2 className="cards__title">
                        Aplicacion de <span className="cards__title--yellow">Starbucks</span>
                    </h2>
                    <p className="cards__text">
                        Ahorre tiempo con click & collect recolecte sus estrellas..
                        <br />
                        Hacer pedidos nunca ha sido tan fácil.
                    </p>
                    <br />
                    <div className="cards__card-container-btn">
                        <button className="cards__card-btn">Pruébelo</button>
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <div className="cards__card-circle">10%</div>
                <img className="cards__card-img" src={card_2} alt="card-2.png" />
                <div className="cards__container-text">
                    <h2 className="cards__title">
                        Starbucks <span className="cards__title--yellow">Delivery</span>
                    </h2>
                    <p className="cards__text">
                        Starbucks entrega su comida y bebida favorita en la puerta de su
                        casa.
                    </p>
                    <br />
                    <div className="cards__card-container-btn">
                        <button className="cards__card-btn">Entrega por UberEats</button>
                        <button className="cards__card-btn">Entrega por PedidosYa</button>
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <img className="cards__card-img" src={card_3} alt="card-3.png" />
                <div className="cards__container-text">
                    <h2 className="cards__title">
                        Novedades <span className="cards__title--yellow">Starbucks</span>
                    </h2>
                    <p className="cards__text">
                        Mantengase informado de nuestras últimas novedades y
                        actualizaciones.
                    </p>
                    <div className="cards__card-container-btn">
                        <button className="cards__card-btn">Más Información</button>
                    </div>
                </div>
            </div>
            <div className="cards__card">
                <img className="cards__card-img" src={card_4} alt="card-4.png" />
                <div className="cards__container-text">
                    <h2 className="cards__title">
                        Historias de <span className="cards__title--yellow">Starbucks</span>
                    </h2>
                    <p className="cards__text">Descubra nuestra empresa y nuestra historia</p>
                    <div className="cards__card-container-btn">
                        <button className="cards__card-btn">Más Información</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cards