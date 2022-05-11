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
    const {user} = useContext(CustomContext);

    return (
        <main className={'main'}>
            <div className="container">
                <Routes>
                    {/*<Route path='/' element={<Home/>}/>*/}
                    { user.email !== 'admin@mail.ru' && <Route path='/' element={<Home/>}/>}
                    <Route  path='/shop' element={<Shop/>}/>
                    <Route path='/brands' element={<Brands/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/profile' element={<Profile/>}/>

                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/order' element={<Order/>}/>
                    <Route path='/product/:id' element={<Product/>}/>
                    { user.email === 'admin@mail.ru' && <Route path='/*' element={<AdminPanel/>}/>}
                    {/*   /:... это зовется парамсы. дает дополнительные парметры, которые можно юзать для сортировки, в адресную строку на сайт.    */}
                    {/*вытащить парамс через хук юзПарамс from 'react-router-dom'*/}


                    <Route path='/*' element={<Wrong/>}/>
                </Routes>
            </div>
        </main>
    );
};

export default Main;