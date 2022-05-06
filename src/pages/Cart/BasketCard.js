import React, {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {ImCross} from 'react-icons/im'
import img from "../../Assets/basket.jpg";
import {CustomContext} from "../../Context";

const BasketCard = ({item}) => {
    let navigate = useNavigate();
    const {cart, removeCart, setCart, changeCart} = useContext(CustomContext);
    const [countCart, setCountCart] = useState(item.count);



    return (
        <div className="basket__product">
            <div className='basket__product-left'>
                <p onClick={() => removeCart(item.id,  item.color,  item.size )} className='basket__product-mark'><ImCross/></p>
                <img onClick={() => {navigate(`/product/${item.id}`); }} className='basket__product-img' src={`../Shop/${item.image}`} alt={item.title}/>
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
                           onChange={(e) => {setCountCart(e.target.value); changeCart(item.id, item.color, item.size, e.target.value)}} type="number"/>
                </li>
                <li className="basket__info-item">${item.price * item.count}</li>
            </ul>
        </div>
    );
};

export default BasketCard;