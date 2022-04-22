import './home.scss'
// import {useTranslation} from 'react-i18next'
import NewSeason from "./NewSeason/NewSeason";
import Collection from "./Collection/Collection";
import Important from "./Important/Important";
import {useContext} from "react";
import {CustomContext} from "../../Context";


const Home = () => {
// const {t} = useTranslation();
    // console.log(t); t is a func...
const {count, setCount} = useContext(CustomContext);

    return (
        <div className={'container'}>
            <NewSeason/>
            <Collection/>
            <Important/>



        </div>
    );
};

export default Home;