import Header from "./Header/Header";
import Footer from "./Footer/footer";
import Main from "./Main/Main";
import {useLocation} from "react-router-dom";




const Layout = () => {

    const location = useLocation();

    // console.log(location);


    return (
        <>
            {
                location.pathname !== '/login' && location.pathname !== '/register' ? <Header/> : ''
            }
            <Main/>
            {
                location.pathname !== '/login'
                && location.pathname !== '/register'
                && location.pathname !== '/admin'
                && location.pathname !== '/clothes'
                && location.pathname !== '/*' ? <Footer/> : ''
            }
        </>
    );
};

export default Layout;