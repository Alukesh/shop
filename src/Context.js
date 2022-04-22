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


    const registerUser = (data) =>{
        axios.post('http://localhost:8080/register',{...data, orders: []})
            .then(({data}) => {
                localStorage.setItem('user', JSON.stringify(data.user));
                setUser(data.user);
                navigate("/")
            });
    };

    const loginUser = (data) =>{
        axios.post('http://localhost:8080/login', data)
            .then((res) => {
                setUser(data.user);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate("/")
            })
    };

    useEffect(() =>{
        if (localStorage.getItem('user') !== null){
            // setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[]);

    const logOutUser = () =>{
        localStorage.removeItem('user');
        setUser({
            login:''
        })
    };


    const value = {
        page,
        setPage,
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser
    };


        return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>



};