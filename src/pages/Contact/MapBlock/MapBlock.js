import {useContext} from "react";
import {CustomContext} from "../../../Context";
import {useTranslation} from "react-i18next";

const MapBlock = () => {
    let {t} = useTranslation();

    return (
        <div className={'contact__mapBlock'}>
            <div className="contact__map-block" >
                <iframe className={'contact__map'}
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a7db89ad20c176deff8474ee3a110c428fa53be89670cd16695fdc0ad761a5f&amp;source=constructor"
                    width="1070" height="480" frameBorder="0"></iframe>
            </div>
            <div className={'contact__mapBlock-links'}>
                <p>
                    <span>{t("Contact.links.phone")}</span>
                    <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
                </p>
                <p>
                    <span>{t("Contact.links.email")}</span>
                    <a href="#">info@sitename.com</a>
                </p>
                <p>
                    <span>{t("Contact.links.address")}</span>
                    <a href="#">г. Москва, 3-я улица Строителей, 25</a>
                </p>

            </div>
        </div>
    );
};

export default MapBlock;