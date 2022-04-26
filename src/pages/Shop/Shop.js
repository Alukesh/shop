import About from "../Brands/About/About";
import {useState, useContext} from "react";
import 'antd/dist/antd.css';
import { Pagination } from 'antd';
// import {createRoot} from "react-dom/client";
// import Demo from './demo'
import {CustomContext} from "../../Context";

const Shop = () => {
    const [status, setStatus] = useState('');
    const [page, setPage] = useState(1);
    const {shop} = useContext(CustomContext);


    return (
        <section className={'shop'}>
            <About title={"Shop.title"} link1={"Shop.link1"} link2={"Shop.link2"}/>
            <ul className={'shop__list'}>
                <li className={`shop__item ${status === '' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('')}}>Все</li>
                <li className={`shop__item ${status === 'coat' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('coat')}}>Пальто</li>
                <li className={`shop__item ${status === 'sweatshirt' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('sweatshirt')}}>Свитшоты</li>
                <li className={`shop__item ${status === 'cardigan' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('cardigan')}}>Кардиганы</li>
                <li className={`shop__item ${status === 'hoodie' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('hoodie')}}>Толстовки</li>
            </ul>
            Shops
            <p>Показано: {shop.filter(item => item.category.includes(status)).filter((item, idx) => {
                return  idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
            }).length} из
                {shop.filter((item) => item.category.includes(status)).length} товаров</p>

            <div className={'shop__row'}>
                {
                    shop.filter(item =>{
                        return item.category.includes(status)
                    }).filter((item, idx) =>{
                        return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
                    }).map(item =>(
                            <div key={item.id} className="shop__card">
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
            <p>Показано: {
                shop.filter(item => item.category.includes(status)
                ).filter((item, idx) =>  idx + 1 <= page * 9 && idx + 1 > page * 9 - 9).length
            } из {
                shop.filter(item => item.category.includes(status)).length
            } товаров</p>


            {
                shop.filter(item => item.category.includes(status)
                ).length > 9 &&
                <Pagination simple onChange={setPage} current={page} total={shop.filter(item =>
                     item.category.includes(status)
                ).length} pageSize={12}/>
            }

        </section>
    );
};

export default Shop;