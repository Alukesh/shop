// import './contact.scss'
import About from "../Brands/About/About";
import {useTranslation} from "react-i18next";
import MapBlock from "./MapBlock/MapBlock";
import Form from "./Form/Form";

const Contact = () => {
    const {t} = useTranslation();

    return (
        <div className={'contact'}>
            <About title={"Contact.title"} link1={"Contact.link1"} link2={"Contact.link2"}/>
            <MapBlock/>
            <Form/>


        </div>
    );
};

export default Contact;