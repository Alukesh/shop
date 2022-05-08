import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import img from "../../Assets/basket.jpg";
import {CustomContext} from "../../Context";
import axios from "axios";

const BasketCard = ({item}) => {
    let navigate = useNavigate();
    const {cart, removeCart, setCart, changeCart, product, setProduct} = useContext(CustomContext);
    const [countCart, setCountCart] = useState(item.count);

    useEffect(() => {
        axios(`http://localhost:8080/clothes/${item.id}`)
            .then(({data}) => {
                setProduct(data);
            })
    }, []);


    return (
        <div className="basket__product">
            <div className='basket__product-left'>
                <p onClick={() => removeCart(item.id,  item.color,  item.size )} className='basket__product-mark'><ImCross/></p>
                <LazyLoadImage
                    onClick={() => {navigate(`/product/${item.id}`); }}
                    className='basket__product-img'
                    alt={item.title}
                    src={`../Shop/${item.image}`}
                    effect={'blur'}
                />
                {/*<img onClick={() => {navigate(`/product/${item.id}`); }} className='basket__product-img' src={`../Shop/${item.image}`} alt={item.title}/>*/}
                <p  className='basket__product-name'>{item.title}</p>
            </div>

            <ul className="basket__info-list">

                <li className="basket__info-item" >
                    <p key={item} className={`product__info-color'}`}
                       style={{background: item.color, width:'20px', height:'20px' , border: item.color === 'white' && '1px solid grey'}} />
                    {item.color}</li>
                <li className="basket__info-item">{item.size}</li>
                <li className="basket__info-item">${item.price}</li>
                <li className="basket__info-item">
                    <input className={'basket__info-input'} min={1} max={item.inStock} value={countCart}

                           onChange={(e) => setCountCart(e.target.value > product.inStock && product.inStock || e.target.value)} type="number"/>
                </li>
                <li className="basket__info-item">${item.price * item.count}</li>
            </ul>
        </div>
    );
};

export default BasketCard;