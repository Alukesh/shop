import {useTranslation} from "react-i18next";

const Form = () => {
    let {t} = useTranslation();

    return (
        <div>
            <form className={'contact__form'}>
                <h2 className={'contact__form-title'}>{t("Contact.form.title")}</h2>
                <input className={'contact__form-input'} type="text" placeholder={t("Contact.form.name")}/>
                <input className={'contact__form-input'} type="text" placeholder={'E-mail'}/>
                <input className={'contact__form-input'} type="text" placeholder={t("Contact.form.phone")}/>
                <textarea className={'contact__form-text'} placeholder={t("Contact.form.message")} name="text" id=""/>
                <button className={'contact__form-btn'} >{t("Contact.form.send")}</button>
            </form>
        </div>
    );
};

export default Form;