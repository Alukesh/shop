import React, {useContext, useState} from "react";
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CustomContext} from "../../Context";
import {use} from "i18next";
import InputMask from 'react-input-mask'
import Input from "../Register/Input/Input";


const Profile = () => {

    const {user} = useContext(CustomContext);
    const [userChange, setUserChange ] = useState(false);
    const [passwordChange, setPasswordChange ] = useState(false);

    // console.log(user);

    return (
        <section className={'profile'}>
            <div className={'profile__top'}>
                <h1 className={'title'}>Мой профиль</h1>
                <div className={'profile__top-btns'}>
                    <button className={'profile__top-btn'}>История заказов</button>
                    <button className={'profile__top-btn profile__top-setting '}>Настройки</button>
                </div>
            </div>

            <br/>
            <div className={'profile__user'}>
                <div className="profile__user-change">
                    <h2 className={'profile__user-title'}>Личные данные</h2>
                    <button className={'profile__user-btn'}
                            // style={{background: userChange && '#6e9c9f', color: userChange && 'white'}}
                        onClick={() => setUserChange(!userChange)}> {
                        userChange ? 'Отменить' : <span><HiOutlinePencilAlt/> Изменить</span>
                    }</button>
                </div>
                <div className={'profile__user-info'}>
                    <p className={'profile__user-data'}><span>Логин*</span>
                        { userChange? <input defaultValue={user.login} type="text"/> : user.login}
                    </p>
                    <p className={'profile__user-data'}><span>Тел:</span>
                        { userChange?  <Input tel={user.phone}/> : user.phone}
                    </p>
                    <p className={'profile__user-data'}><span>Почта*</span>
                        { userChange? <input defaultValue={user.email} type="email"/> : user.email}
                    </p>
                    <p className={'profile__user-data'}><span>Дата рождения</span>
                        { userChange? <input defaultValue={'2001.03.17'} type="date"/> : '2001.03.17'}
                    </p>
                </div>
                {
                    userChange ?
                        <button className={'profile__user-btn'}
                                style={{background: userChange && '#6e9c9f', color: userChange && 'white'}}
                                onClick={() => setUserChange(!userChange)}>Сохранить изменения</button>
                        : ''
                }
            </div>
              <div className={'profile__user'}>
                <div className="profile__user-change">
                    <h2 className={'profile__user-title'}>Пароль</h2>
                    <button className={'profile__user-btn'}>{
                        passwordChange ? 'Отменить' : <span><HiOutlinePencilAlt/> Изменить</span>
                    }</button>
                </div>
            </div>
             <div className={'profile__user'}>
                <div className="profile__user-change">
                    <div>
                        <h2 className={'profile__user-title'}>Пожписки</h2>
                        <input type="checkbox" id={'subscr'}/>
                        <label htmlFor="subscr" className={'profile__user-data_title'}> Получать предложения и акции</label>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Profile;