import React, {createContext, useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";




export const CustomContext = createContext();


export const Context = (props) =>{
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [user, setUser] = useState({
        login: '',

    });
    const [shop, setShop] = useState([]);

    useEffect(() =>{
        if (localStorage.getItem('user') !== null){
             setUser(JSON.parse(localStorage.getItem('user')))
        }

        axios('http://localhost:8080/clothes')
            .then(({data}) => setShop(data))
    },[]);

    const registerUser = (data) =>{
        axios.post('http://localhost:8080/register',{...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate("/")
            });
    };

    const loginUser = (data) =>{
        // console.log(data);
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user));
                setUser(res.data.user);
                navigate("/")
            })
    };



    const logOutUser = () =>{
        // confirm('delete user?')
        if (window.confirm('Continue Logout?')){
            localStorage.removeItem('user');
            setUser({
                login:''
            })
        }


    };


    const value = {
        page,
        setPage,
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser,
        shop
    };


        return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>



};