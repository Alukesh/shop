import {Link, NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import img from "../../Assets/basket.jpg"
import React, {useContext, useState} from "react";
import {CustomContext} from "../../Context";
import BasketCard from "./BasketCard";
import axios from "axios";
//
const Cart = () => {
    let navigate = useNavigate();

    const {cart, removeCart, setCart, ticket, setTicket} = useContext(CustomContext);
    const {t} = useTranslation();

    const useTicket = (e) =>{
        e.preventDefault();
        axios(`http://localhost:8080/tickets?title=${e.target[0].value}`)
            .then(({data}) =>{
                if ( data.length){
                    setTicket(data);
                    // console.log(data)

                } else {
                    setTicket('Такой промокод не существует')
                }
            })
    };

    return (
        <section className={'basket'}>
            <div className="container">
                <h2 className="about__title big-title" dangerouslySetInnerHTML={{__html: t("Cart.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("Cart.link1")}</Link>
                    -
                    <NavLink className="about__link" to={`/cart`}>{t("Cart.link2")}</NavLink>
                </div>

                <div className="basket__info">
                    <h3 className="basket__info-title">Товар</h3>
                    <ul className="basket__info-list">
                        <li className="basket__info-item">Цвет</li>
                        <li className="basket__info-item">Размер</li>
                        <li className="basket__info-item">Цена</li>
                        <li className="basket__info-item">Кол-во</li>
                        <li className="basket__info-item">Всего</li>
                    </ul>
                </div>

                    { cart.length ?
                        cart.map((item, idx) =>(
                            <BasketCard  key={idx} item={item} />
                        ))

                        : <h2 className={'basket__info-empty'}>Увы заказов пока нет</h2>

                    }
                    { cart.length ?
                        <>
                            <div className='basket__ticket'>
                                <form className='basket__ticket-left' onSubmit={useTicket}>
                                    <input className='basket__ticket-input' placeholder='Введите купон' type="text"/>
                                    <button type='submit' className="basket__ticket-btn">Применить купон</button>
                                    <p className={'basket__ticket-message'}>
                                        {Array.isArray(ticket) && ticket.length ?
                                            `По данному промокоду вы получили скидку в размере :${ticket[0].sum}%`
                                            : ticket.length ?  <p > {ticket}</p>
                                                : ''
                                        }
                                    </p>
                                </form>
                                <button className="basket__ticket-btn" onClick={() => setCart([])}>Обновить корзину</button>
                            </div>
                            <div className='basket__pay'>
                                <div className='basket__pay-header'>
                                    <p className='basket__pay-info'>Подытог:</p>
                                    <p className='basket__pay-info'>${cart.reduce((acc, rec) => [+acc + +rec.price * rec.count],0)}</p>
                                </div>

                                <div className='basket__pay-btns'>
                                    <p className='basket__pay-btn1'>Итого: <span>${ Array.isArray(ticket) && ticket.length
                                        ? (cart.reduce((acc, rec) => +acc + +rec.price * rec.count, 0) / 100 * (100 - ticket[0].sum)).toFixed()
                                        : cart.reduce((acc, rec) => +acc + +rec.price * rec.count, 0)}
                        </span></p>
                                    <Link to={'/checkout'} onClick={()=>  window.scrollTo('pageYOffset', 400)} className='basket__pay-btn2'>Оформить заказ</Link>
                                </div>
                            </div>
                        </> : ''
                    }



            </div>
        </section>
    );
};

export default Cart;