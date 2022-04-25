import React, {useContext} from "react";
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {CustomContext} from "../../Context";
import {use} from "i18next";

const Profile = () => {

    const {user} = useContext(CustomContext);

    console.log(user)

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
                    <button className={'profile__user-btn'}><HiOutlinePencilAlt/> Изменить</button>
                </div>
                <div className={'profile__user-info'}>
                    <p className={'profile__user-data'}>
                        <span>Имя*</span>
                        {user.login}
                    </p>
                    <p className={'profile__user-data'}>
                        <span>Тел:</span>
                        {user.phone}
                    </p>
                    <p className={'profile__user-data'}>
                        <span>Почта*</span>
                        {user.email}
                    </p>
                    <p className={'profile__user-data'}>
                        <span>Дата рождения</span>
                        2001.03.17
                    </p>
                </div>


            </div>
        </section>
    );
};

export default Profile;