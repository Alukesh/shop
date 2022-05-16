import About from "../Brands/About/About";
import React, {useState, useContext} from "react";
import {Link, NavLink} from 'react-router-dom'
import 'antd/dist/antd.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Pagination } from 'antd';
import {CustomContext} from "../../Context";
import {useTranslation} from "react-i18next";
// import {createRoot} from "react-dom/client";
// import Demo from './demo'

const Shop = () => {
    const {t} = useTranslation();
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('');
    const {shop, status, setStatus} = useContext(CustomContext);

    const showCount = shop.filter(el => sort === 'discount' ? el.priceSale : el ).filter(item => item.category.includes(status)).filter((item, idx) => {
        return  idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
    }).length,
        showCountLength = shop.filter(el => sort === 'discount' ? el.priceSale : el ).filter((item) => item.category.includes(status)).length;


    return (
        <section className={'shop'}>
            <div className="container">
            <div className="shop__inner">

            <div className="">
                <h2 className="about__title" dangerouslySetInnerHTML={{__html: t("Shop.title")}}/>
                <div className="about__links">
                    <Link className="about__link" to='/'>{t("Shop.link1")}</Link>
                    -
                    <NavLink className="about__link" to={`/shop`}>{t("Shop.link2")}</NavLink>
                </div>

            </div>
            {/*<About title={"Shop.title"}  link1={"Shop.link1"} link2={"Shop.link2"}/>*/}
            <ul className={'shop__list'}>
                <li className={`shop__item ${status === '' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('')}}>Все</li>
                <li className={`shop__item ${status === 'coat' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('coat')}}>Пальто</li>
                <li className={`shop__item ${status === 'sweatshirt' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('sweatshirt')}}>Свитшоты</li>
                <li className={`shop__item ${status === 'cardigan' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('cardigan')}}>Кардиганы</li>
                <li className={`shop__item ${status === 'hoodie' && 'shop__item_active'}`} onClick={() => {setPage(1); setStatus('hoodie')}}>Толстовки</li>
            </ul>
                <select className={'shop__select'} onChange={(e) => setStatus(e.target.value)} name="categoru" id="shop">
                    <option value="">Все</option>
                    <option value="coat">Пальто</option>
                    <option value="sweatshirt">Свитшоты</option>
                    <option value="cardigan">Кардиганы</option>
                    <option value="hoodie">Толстовки</option>
                </select>

            {
                sort &&
                    <h2 className={''}>{t("Shop.sortTitle")}: <span>{sort}</span></h2>
            }
            <div className={'shop__sorts'}>
                <button type='button' className={`shop__sort ${sort === 'big' ? 'shop__sort-active' : ''}`}
                onClick={() =>{setPage(1); setSort(sort  !== 'big' ? 'big' : '')}} >Sort Big </button>
                <button type='button' className={`shop__sort ${sort === 'less' ? 'shop__sort-active' : ''}`}
                onClick={() =>{setPage(1); setSort('less' !== sort ? 'less' : '')}} >Sort less </button>
                <button type='button' className={`shop__sort ${sort === 'discount' ? 'shop__sort-active' : ''}`}
                onClick={() =>{setPage(1); setSort('discount' !== sort ? 'discount' : '')}} >Sort discount </button>

            </div>

            {/*Shops*/}
            <p>Показано: {showCount} из {showCountLength} товаров</p>

            <div className={'shop__row'}>
                {
                    shop.sort((a, b) =>{
                        if (sort === 'big'){
                            return (b.priceSale || b.price) - (a.priceSale || a.price)
                        } else if (sort === 'less'){
                            return  (a.priceSale || a.price) - (b.priceSale || b.price)
                        }
                    }).filter(el => sort === 'discount' ? el.priceSale : el ).filter(item =>{
                        return item.category.includes(status)
                    }).filter((item, idx) =>{
                        return idx + 1 <= page * 9 && idx + 1 > page * 9 - 9
                    }).map(item =>(
                            <div key={item.id} className="shop__card">
                                <div className="shop__hover">
                                    <LazyLoadImage
                                        className={'shop__img'}
                                        alt={'t-short'}
                                        src={`../Shop/${item.image[item.colors[0]]}`}
                                        effect={'blur'}
                                    />
                                    {/*<img className={'shop__img'} src={`../Shop/${item.image}`} />*/}
                                    {
                                        !item.inStock  &&
                                        <p className={'shop__info-stock'} style={{textAlign: 'center'}}>Нет в наличии</p>
                                    }
                                    <Link to={`/product/${item.id}`} onClick={() => {
                                        window.scrollTo('pageYOffset', 150)
                                    }} className={`shop__arrow `}>
                                     <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/></svg>
                                    </Link>
                                </div>
                                <h3 className={'shop__card-title'}>{item.title}</h3>
                                {/*<p className={'shop__price'}><span>${item.price}</span> <span>${item.priceSale}</span></p>*/}
                                <p className={'shop__price'} style={{ fontSize: '20px'}}>{item.priceSale
                                    ? <>
                                    <span className={''}
                                          style={{color: 'inherit'}}>${item.priceSale} </span>
                                        <span style={{
                                            textDecoration: 'line-through',
                                            color: '#9C9C9C',
                                            fontSize: '18px'
                                        }}>  ${item.price}</span>
                                    </>
                                    : `$${item.price}`
                                }</p>


                            </div>

                    ))
                }
            </div>
            <p>Показано: {showCount} из {showCountLength} товаров</p>


            {
                shop.filter(el => sort === 'discount' ? el.priceSale : el ).filter(item => item.category.includes(status)
                ).length > 9 &&
                <Pagination simple onChange={setPage} current={page} total={shop.filter(el => sort === 'discount' ? el.priceSale : el ).filter(item =>
                     item.category.includes(status)
                ).length} pageSize={9}/>
            }
            </div>
            </div>
        </section>
    );
};

export default Shop;