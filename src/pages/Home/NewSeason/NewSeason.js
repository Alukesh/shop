import {useTranslation} from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link} from "react-router-dom";

const NewSeason = () => {

    const {t} = useTranslation();

    return (
        <section className={'newSeason'}>
            <div className={'newSeason__info'}>
                <h2 className={'newSeason__title big-title'} dangerouslySetInnerHTML={{__html: t("home.newSeason.title")}} />
                <div className={'newSeason__textblock'}>
                    <p className={'newSeason__subtitle'}>{t("home.newSeason.subtitle")}</p>
                    <div className={'newSeason__btns'}>
                        <button className={'newSeason__btn newSeason__arrow'}>
                            <span>
                                <svg width="16" height="29" viewBox="0 0 16 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0V28M8 28L1 20.8108M8 28L15 20.8108" stroke="#6E9C9F"/></svg>
                            </span>
                        </button>
                        <Link to={"/shop"} className={'newSeason__btn newSeason__open-shop'}>{t("home.newSeason.btn")}</Link>
                    </div>
                </div>

            </div>
            <div className={'newSeason__photos'}>
                <LazyLoadImage
                    className={'newSeason__img'}
                    alt={'t-short'}
                    src={"../Assets/home/season.jpg"}
                    effect={'blur'}
                />
                {/*<img className={'newSeason__img'} src="../Assets/home/season.jpg" alt="a"/>*/}
            </div>
            <div className="newSeason__right">{''}</div>
        </section>
    );
};

export default NewSeason;