import {useState} from "react";

const ProfileHistory = ({item, idx}) => {
    const [arrow, setArrow ] = useState(false);




    return (
        <div key={idx} className={'profile__orders-card'}>
            <div className={'profile__orders-header'}>
                <div style={{display:"flex", columnGap:10+'px'}}>
                    <p>Заказ: {idx + 1}</p>
                    <p>  {(item.date).slice(1,10)}</p>
                </div>
                <p className={'profile__orders-info'}>Сумма: <span> {item.price} $</span></p>
                <p className={'profile__orders-info'}>Имя: <span>{item.name}</span></p>
                <p className={'profile__orders-info'}>Почта: <span>{item.email}</span></p>
                <span className={''} style={{width: '30px'}} onClick={() =>{ setArrow(!arrow) }}>
                    {   arrow ?
                        <span className={'profile__orders-arrow_active'}>
                           up
                        </span>
                        :
                        <span className={'profile__orders-arrow'}>
                           down
                        </span>
                    }
                </span>
            </div>
            <div className={'profile__orders-footer'}>
                <div>{item.country ? item.country : 'Страна'} / {item.city ? item.city : 'Город'}</div>
                {/*<span>   {item.home ? item.home : 'home'} / {item.flat ? item.flat : 'flat'}</span>*/}
                <div className={'profile__orders-footer-left'}>
                    {item.clothes.filter((order, id)=> id < 3).map(el =>(
                        <img onClick={() => console.log(el.image)} className={'profile__orders-footer-icon'} src={`Shop/${el.image}`} alt={el.title}/>
                    ))}
                    <span className={'profile__orders-notShownIcons'}>{item.clothes.length > 3 ? `+${item.clothes.length - 3}` : ''}</span>
                </div>
            </div>

            {   arrow &&
                <ul className={'profile__orders-list'}>

                    {
                        item.clothes.map(el => (
                            <li key={el.id} className={'profile__orders-item'}>
                                <img  className={'profile__orders-img'} src={`Shop/${el.image}`} alt=""/>
                                <p className={'profile__orders-info'}>{el.title}</p>
                                <p className={'profile__orders-info'}>{el.category}</p>
                                <p className={'profile__orders-info'}>кол-во: <span>{el.count}</span></p>
                                <p className={'profile__orders-info'}>{el.color} </p>
                                <p className={'profile__orders-info'}>{el.size}</p>
                                <p className={'profile__orders-info'}>цена:  {el.price}$</p>
                            </li>
                        ))
                    }
                </ul>
            }


        </div>
    );
};

export default ProfileHistory;