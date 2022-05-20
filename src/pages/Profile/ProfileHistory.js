import {useState} from "react";

const ProfileHistory = ({item, idx}) => {
    const [arrow, setArrow ] = useState(false);




    return (
        <div key={idx} className={'profile__orders-card'}>
            <div className={'profile__orders-header'}>
                <div style={{display:"flex", columnGap:10+'px'}}>
                    <p>Заказ: {idx + 1}</p>
                    <p>  {(item.date)}</p>
                </div>
                <p className={'profile__orders-info'}>Сумма: <span> {item.price} $</span></p>
                <p className={'profile__orders-info'}>Имя: <span>{item.name}</span></p>
                <p className={'profile__orders-info'}>Почта: <span>{item.email}</span></p>
                <span className={''} style={{width: '30px'}} onClick={() =>{ setArrow(!arrow) }}>
                    {   arrow ?
                        <span className={'profile__orders-arrow_active'}>
                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 8.64986C16 8.45805 15.9289 8.26605 15.7869 8.11962L8.5142 0.619697C8.23002 0.326638 7.76984 0.326638 7.48584 0.619697L0.213135 8.11962C-0.0710456 8.41268 -0.0710456 8.88724 0.213135 9.18011C0.497316 9.47298 0.957497 9.47317 1.2415 9.18011L8.00002 2.21043L14.7585 9.18011C15.0427 9.47317 15.5029 9.47317 15.7869 9.18011C15.9289 9.03367 16 8.84167 16 8.64986Z" fill="#FF7010"/></svg>
                        </span>
                        :
                        <span className={'profile__orders-arrow'}>
                          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 1.35014C16 1.54195 15.9289 1.73395 15.7869 1.88038L8.5142 9.3803C8.23002 9.67336 7.76984 9.67336 7.48584 9.3803L0.213135 1.88038C-0.0710456 1.58732 -0.0710456 1.11276 0.213135 0.819893C0.497316 0.52702 0.957497 0.526833 1.2415 0.819893L8.00002 7.78957L14.7585 0.819892C15.0427 0.526833 15.5029 0.526833 15.7869 0.819892C15.9289 0.966328 16 1.15833 16 1.35014Z" fill="#FF7010"/></svg>
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