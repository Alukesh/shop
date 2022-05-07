import {Link, NavLink, useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../Context";
import {useForm} from "react-hook-form";
import axios from "axios";

const Checkout = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const {cart, ticket, setCart, setTicket,  user, setUser } = useContext(CustomContext);
    const {reset, register, handleSubmit} = useForm();

    const addOrder = async (data) =>{
        await axios.post('http://localhost:8080/orders', {
            ...data,
            clothes: cart,
            price: Array.isArray(ticket) && ticket.length
                ? cart.reduce((acc, rec) => acc + rec.price * rec.count, 0) / 100 * (100 - ticket[0].sum)
                : cart.reduce((acc, rec) => acc + rec.price * rec.count, 0),
            userEmail: user.email,
            date: new Date()
        }).then(() =>{ console.log('успешно добавленll');} );

        await axios.patch(`http://localhost:8080/users/${user.id}`, {
            orders: [
                ...user.orders,
                {
                    clothes: cart,
                    price: Array.isArray(ticket) && ticket.length
                        ? cart.reduce((acc, rec) => acc + rec.price * rec.count, 0) / 100 * (100 - ticket[0].sum)
                        : cart.reduce((acc, rec) => acc + rec.price * rec.count, 0),
                    date: new Date()
                }
                ]})
            .then(() =>{ console.log('успешно добавлен')});

        await axios(`http://localhost:8080/users/${user.id}`).then((res) => setUser(res.data));


        await Array.isArray(ticket) && ticket.length && ticket[0].count > 1 ?
                axios.patch(`http://localhost:8080/tickets/${ticket[0].id}`, {count: ticket[0].count - 1})
                .then(() => console.log('успешно потрачено'))
            : ticket[0].count === 1 ? axios.delete(`http://localhost:8080/tickets/${ticket[0].id}`).then(() => console.log('потрачено до конца')) : console.log('no sale');

        await reset();
        await setCart([]);
        await setTicket([]);
        await navigate('/order');

    };


    return (
        <section className={'checkout'}>
            <div className="container">
                <h2 className="about__title" dangerouslySetInnerHTML={{__html: t("Checkout.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("Checkout.link1")}</Link>
                    -
                    <NavLink className="about__link" to={`/cart`}>{t("Checkout.link2")}</NavLink>
                    -
                    <NavLink className="about__link" to={`/checkout`}>{t("Checkout.link3")}</NavLink>
                </div>

                <div className={'checkout__inner'}>
                    <form className={'checkout__form'} onSubmit={handleSubmit(addOrder)}>
                        <div className={'checkout__form-left'}>
                            <div className={'checkout__form-info'}>
                                <h2 className={'checkout__title'}>Данные покупателя</h2>
                                <input {...register('name')} required={true} className={'checkout__form-input'} type="text" placeholder={'Имя'}/>
                                <input {...register('email')}  className={'checkout__form-input'} type="text" placeholder={'E-mail'}/>
                                <input {...register('phone')}  className={'checkout__form-input'} type="text" placeholder={'Телефон'}/>
                            </div>
                            <div className={'checkout__form-address'}>
                                <h2 className={'checkout__title'}>Адрес получателя</h2>
                                <input {...register('country')}  className={'checkout__form-input'} type="text" placeholder={'Страна'}/>
                                <input {...register('city')}  className={'checkout__form-input'} type="text" placeholder={'Город'}/>
                                <input {...register('street')}  className={'checkout__form-input'} type="text" placeholder={'Улица'}/>
                                <input {...register('home')}  className={'checkout__form-input'} type="text" placeholder={'Дом'}/>
                                <input {...register('flat')}  className={'checkout__form-input'} type="text" placeholder={'Квартира'}/>
                            </div>
                            <div>
                                <h2 className={'checkout__title'}>Комментарии</h2>
                                <textarea {...register('massage')}  className={'checkout__form-input checkout__form-input_massage'}  name="message" id="1" cols="10" rows="5" placeholder={'Страна'}> </textarea>
                            </div>

                        </div>
                        <div className={'checkout__form-right'}>
                            <div className={'checkout__form-order'}>
                                <h2 className={'checkout__title'}>Ваш заказ</h2>
                                <ul className={'checkout__order_list'}>
                                    <li className={'checkout__order-top checkout__order-title'}>
                                        <p>Товар</p>
                                        <p>Всего</p>
                                    </li>
                                    {
                                        cart.map((item) =>(
                                            <li className={'checkout__order-cart'}>
                                                <div className={'checkout__order-top'}>
                                                    <p className={'checkout__order-name'}>{item.title}</p>
                                                    <p className={'checkout__order'}>{item.count}</p>
                                                </div>
                                                <div className={'checkout__order-bot'}>
                                                    <p>{item.color}</p>
                                                    <p>{item.size}</p>
                                                    <p>{item.price * item.count}</p>
                                                </div>
                                            </li>
                                        ))
                                    }
                                    <li className={' checkout__order-top checkout__order-title '}>
                                        <p>Подытог</p>
                                        <p>${cart.reduce((acc, rec) =>[+acc + +rec.price * +rec.count], 0)}</p>
                                    </li>
                                    <li className={' checkout__order-total'}>
                                        <p>Итого</p>
                                        <p>${ Array.isArray(ticket) && ticket.length
                                            ? (cart.reduce((acc, rec) => +acc + +rec.price * rec.count, 0) / 100 * (100 - ticket[0].sum)).toFixed()
                                            :  cart.reduce((acc, rec) => +acc + +rec.price * rec.count, 0)}</p>
                                    </li>
                                </ul>

                            </div>

                            <div className={'checkout__form-pay'}>
                                <h2 className={'checkout__title'}>Способы оплаты</h2>
                                <div>
                                    <input type="checkbox" id={'cash'} name={'cash'}/>
                                    <label className={'checkout__form-checkbox'} for={'cash'}>Оплата наличными</label>
                                </div>
                                <button type="submit" onClick={()=> window.scrollTo('pageYOffset', 0)} className={'basket__pay-btn2'}>Разместить заказ</button>
                            </div>

                        </div>


                    </form>

                </div>

            </div>
        </section>
    );
};

export default Checkout;