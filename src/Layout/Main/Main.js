import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Brands from "../../pages/Brands/Brands";
import Contact from "../../pages/Contact/Contact";
import Wrong from "../../pages/Wrong/Wrong";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Profile from "../../pages/Profile/Profile";
import Product from "../../pages/Product/Product";
import Checkout from "../../pages/Checkout/Checkout";
import Order from "../../pages/Checkout/Order";
import AdminPanel from "../../pages/AdminPanel/AdminPanel";
import {useContext} from "react";
import {CustomContext} from "../../Context";
import {use} from "i18next";

const Main = () => {


    return (
        <main className={'main'}>
            <div className="container">

            </div>
        </main>
    );
};

export default Main;