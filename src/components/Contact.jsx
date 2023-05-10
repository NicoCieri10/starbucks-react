import React from 'react';
import '../css/contact.css';


const Contact = () => {
    return (
        <section className="contact">
            <h3 className="contact__title">Contactanos</h3>
            <form className="contact__form">
                <div className="contact__email">
                    <label className="contact__text--email">correo electronico</label>
                    <input
                        className="contact__input--email"
                        placeholder="coloque su correo electrónico"
                        type="email"
                        name="email_user"
                        required
                    />
                </div>
                <div className="contact__comment">
                    <label className="contact__text--comment">comentario</label>
                    <textarea
                        className="contact__textarea-0--comment"
                        placeholder="coloque su comentario"
                        cols="30"
                        rows="10"
                        required
                    ></textarea>
                    <textarea
                        className="contact__textarea-1--comment"
                        placeholder="coloque su comentario"
                        cols="30"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <input className="contact__btn" type="submit" />
            </form>
        </section>
    )
}

export default Contact