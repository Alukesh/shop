import {Link, NavLink} from "react-router-dom";
import Slider from './Slider/Slider'

const Team = () => {
    return (
        <section className={'team'}>
            <h2 className={'team__title'}>Команда мечты Womazing</h2>
            <div className={'team__content'}>
                <Slider/>
                <div className="team__info">
                    <h3  className={'team__info-title'}>Для каждой</h3>
                    <div className={'team__info-text'}>
                        <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
                        <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                        <Link to={'/brands'} className={'team__info-link'} href="#">Подробнее о бренде</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;