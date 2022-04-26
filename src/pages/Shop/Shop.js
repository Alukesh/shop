import About from "../Brands/About/About";
import {useState, useContext} from "react";
import {CustomContext} from "../../Context";
import CollectionCard from "../Home/Collection/CollectionCard";

const Shop = () => {
    const [status, setStatus] = useState('');
    const {shop} = useContext(CustomContext);


    return (
        <section className={'shop'}>
            <About title={"Shop.title"} link1={"Shop.link1"} link2={"Shop.link2"}/>
            <ul className={'shop__list'}>
                <li className={`shop__item ${status === '' && 'shop__item_active'}`} onClick={() => setStatus('')}>Все</li>
                <li className={`shop__item ${status === 'coat' && 'shop__item_active'}`} onClick={() => setStatus('coat')}>Пальто</li>
                <li className={`shop__item ${status === 'sweatshirt' && 'shop__item_active'}`} onClick={() => setStatus('sweatshirt')}>Свитшоты</li>
                <li className={`shop__item ${status === 'cardigan' && 'shop__item_active'}`} onClick={() => setStatus('cardigan')}>Кардиганы</li>
                <li className={`shop__item ${status === 'hoodie' && 'shop__item_active'}`} onClick={() => setStatus('hoodie')}>Толстовки</li>
            </ul>
            Shops
            <p>Показано: 9 из {shop.length} товаров</p>

            <div className={'shop__row'}>
                {
                    shop.filter(item =>{
                        return item.category.includes(status)
                    }).map(item =>(
                            <div className="shop__card">
                                <div className="shop__hover">
                                    <img className={'shop__img'} src={`../Shop/${item.image}`} />
                                    <span className={`shop__arrow `}>
                               <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/></svg>
                            </span>
                                </div>
                                <h3 className={'shop__card-title'}>{item.title}</h3>
                                <p className={'shop__price'}><span>${item.price}</span> <span>{item.newPrice}</span></p>
                            </div>

                    ))
                }
            </div>
            <p>Показано: 9 из {shop.length} товаров</p>

        </section>
    );
};

export default Shop;