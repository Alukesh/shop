import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const CollectionCard = ({img, title, arrow,  price, newPrice}) => {
    return (

        <div className="collection__card">
            <div className="collection__hover">
                <LazyLoadImage
                    className={'collection__img'}
                    alt={'t-short'}
                    src={`./Assets/home/${img}`}
                    effect={'blur'}
                />
                {/*<img className={'collection__img'} src={`./Assets/home/${img}`} alt="t-short"/>*/}
                <span className={`collection__arrow ${arrow}`}>
                               <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white"/></svg>
                            </span>
            </div>
            <h3 className={'collection__card-title'}>{title}</h3>
            <p className={'collection__price'}><span>{price}</span> <span>{newPrice}</span></p>
        </div>
    );
};

export default CollectionCard;