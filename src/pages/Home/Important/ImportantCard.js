import {useTranslation} from "react-i18next";


const ImportantCard = ({img, title, text}) => {

    const {t} = useTranslation();

    return (
        <div className="important__card">
            <img className={'important__card-img'} src={img} alt=""/>
            <h3 className={'important__card-title'}>{title}</h3>
            <p className={'important__card-text'}>{text}</p>
        </div>
    );
};

export default ImportantCard;