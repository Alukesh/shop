
const MapBlock = () => {
    return (
        <div className={'contact__mapBlock'}>
            <div className="contact__map"> </div>
            <div className={'contact__mapBlock-links'}>
                <p>
                    <span>Телефон</span>
                    <a href="tel:+7 (495) 823-54-12">+7 (495) 823-54-12</a>
                </p>
                <p>
                    <span>E-mail</span>
                    <a href="#">info@sitename.com</a>
                </p>
                <p>
                    <span>Адрес</span>
                    <a href="#">г. Москва, 3-я улица Строителей, 25</a>
                </p>

            </div>
        </div>
    );
};

export default MapBlock;