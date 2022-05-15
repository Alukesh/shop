import {useContext, useEffect, useState} from "react";
import {Link, NavLink, useLocation} from 'react-router-dom'
import axios from "axios";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {CustomContext} from "../../Context";
import SliderProduct from "./SliderProduct/SliderProduct";


const Product = () => {
    const location = useLocation();
    const {t} = useTranslation();
    const {setStatus, status, shop, cart, addCart, product, setProduct} = useContext(CustomContext);
    const params = useParams();
    const [size, setSize] = useState('');
    const [count, setCount] = useState(1);
    const [color, setColor] = useState('');

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${params.id}`)
            .then(({data}) => {
                setProduct(data);
                setColor(data.colors[0]);
                setSize(data.size[0]);
                console.log(params)
            })
    }, [location]);

    {useEffect(() =>{
        console.log(cart)
    }, [cart])}

    return (
        <section className={'product'}>
            <div className="container">
                    <div className="">
                        <h2 className="title" dangerouslySetInnerHTML={{__html: `${product.title}`}}/>
                        <div className="about__links">
                            <Link className="about__link" to='/'>{t("Shop.link1")}</Link>
                            -
                            <NavLink className="about__link" to={`/shop`} onClick={() => {
                                setStatus(product.category)
                            }}>{product.category}</NavLink>
                            -
                            <NavLink className="about__link" to={``}>{product.title}</NavLink>
                        </div>

                        </div>
                { product.title &&
                <>
                        <div className="product__content">

                            <LazyLoadImage
                                className={'product__content-img'}
                                alt={product.title}
                                src={`../Shop/${product.image[color]}`}
                                effect={'blur'}
                            />
                            {/*<img className={'product__content-img'} src={`../Shop/${product.image}`} alt={product.title}/>*/}
                            <div className="product__info">
                                <p className={'product__info-price'}>
                                    {product.priceSale
                                        ? <>
                                        <span className={'product__info-price-sale'}
                                              style={{color: 'inherit'}}>${product.priceSale} </span>
                                        <span style={{
                                            textDecoration: 'line-through',
                                            color: '#9C9C9C',
                                            fontSize: '30px'
                                        }}>  ${product.price}</span>
                                        </>
                                        : `$${product.price}`
                                    }
                                </p>
                                <h3 className={'product__info-stock'}>В наличии : <span>{product.inStock ? product.inStock : 'нет'}</span></h3>
                                <p className={'product__info-title'}>Выберите размер</p>
                                <ul className={`product__info-sizes `}>
                                    {
                                        product.size.map((item) => (
                                            <li  key={item} onClick={() => setSize(item)} className={`product__info-size ${size === item && 'product__info-size_active'}`}>{item}</li>
                                        ))
                                    }
                                </ul>

                                <p className={'product__info-title'}>Выберите цвет</p>
                                <ul className={'product__info-colors'}>
                                    {
                                        product.colors.map((item) => (
                                            <li key={item} className={`product__info-color ${item === color && 'product__info-color_active'}`}
                                                style={{background: item, border:  '1px solid grey'}}
                                                onClick={() => setColor(item)}/>
                                        ))
                                    }
                                </ul>
                                <div className={'product__info-form'}>
                                    <input className={'product__info-input'} min={1} max={product.inStock}
                                          disabled={!product.inStock} value={count} onChange={(e) => setCount(e.target.value > product.inStock && product.inStock || e.target.value)} type="number"/>
                                    <button type='button' disabled={ !product.inStock} onClick={ () => {addCart({
                                        id: product.id,
                                        title: product.title,
                                        image: `${product.image[color]}`,
                                        color,
                                        size,
                                        count,
                                        price: product.priceSale || product.price,
                                        category: product.category
                                    })}} className={`product__info-btn ${product.inStock ? 'product__info-btn_buy' : 'product__info-btn_sold'}`}>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                </>
                }
                <p className='product__similar'>Связанные товары</p>


                    
                <div className={'product__row'}>
                   <SliderProduct shop={shop} product={product}/>
                </div>

            </div>
        </section>
    );
};

export default Product;