import About from "../Brands/About/About";
import {useState} from "react";

const Shop = () => {
    const [status, setStatus] = useState('all');


    return (
        <section className={'shop'}>
            <About title={"Shop.title"} link1={"Shop.link1"} link2={"Shop.link2"}/>
            <ul className={'shop__list'}>
                <li className={`shop__item ${status === 'all' && 'shop__item_active'}`} onClick={() => setStatus('all')}>Все</li>
                <li className={`shop__item ${status === 'coat' && 'shop__item_active'}`} onClick={() => setStatus('coat')}>Пальто</li>
                <li className={`shop__item ${status === 'sweatshirt' && 'shop__item_active'}`} onClick={() => setStatus('sweatshirt')}>Свитшоты</li>
                <li className={`shop__item ${status === 'cardigan' && 'shop__item_active'}`} onClick={() => setStatus('cardigan')}>Кардиганы</li>
                <li className={`shop__item ${status === 'hoody' && 'shop__item_active'}`} onClick={() => setStatus('hoody')}>Толстовки</li>
            </ul>
            Shops
            <p>Показано: 9 из 12 товаров</p>
        </section>
    );
};

export default Shop;