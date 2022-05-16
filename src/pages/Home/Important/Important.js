import {useTranslation} from "react-i18next";
import ImportantCard from "./ImportantCard";


const Important = () => {
    const {t} = useTranslation();

    return (
        <section className={'important'}>
            <h2 className={'important__title title'}>{t("home.important.title")}</h2>
            <div className={'important__row'}>
                <ImportantCard img={"./Assets/home/important1.png"} title={t("home.important.cardTitle.quality")} text={t("home.important.cardText.qualityText")}/>
                <ImportantCard img={"./Assets/home/important2.png"} title={t("home.important.cardTitle.speed")} text={t("home.important.cardText.speedText")}/>
                <ImportantCard img={"./Assets/home/important3.png"} title={t("home.important.cardTitle.responsibility")} text={t("home.important.cardText.responsibilityText")}/>

            </div>
        </section>
    );
};

export default Important;