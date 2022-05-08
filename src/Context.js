import React, {createContext, useEffect, useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";




export const CustomContext = createContext();


export const Context = (props) =>{
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [product, setProduct] = useState({});
    const [status, setStatus] = useState('');
    const [cart, setCart] = useState([]);

    const [user, setUser] = useState({login: '',});
    const [shop, setShop] = useState([]);
    const [ticket, setTicket] = useState('');


    const removeCart = (id, color, size) =>{
        setCart(cart.filter((item) =>{
          return item.id !== id || item.color !== color || item.size !== size
        } ))
    };
    const addCart = (product) =>{
        let idx = cart.findIndex(item => item.id === product.id && item.color === product.color && item.size === product.size);
        console.log(idx);
        if (idx >= 0){
            setCart(cart.map(item =>{
                if ( item.id === product.id && item.color === product.color && item.size === product.size){
                    return  {...item, count: +item.count + +product.count}
                } else {
                    return item
                }}))

        } else {
            setCart([...cart, product])
        }
    };
    const changeCart = (id, color, size, count) =>{
      setCart(cart.map(item =>{
          if ( item.id === id && item.color === color && item.size === size){
              return {...item, count: count}
          } else {
              return item
          }
      }))
    };



    useEffect(() =>{
        if (localStorage.getItem('user') !== null){
             setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('cart') !== null){
            setCart(JSON.parse(localStorage.getItem('cart')))
        }

        axios('http://localhost:8080/clothes')
            .then(({data}) => setShop(data))
        },[]);

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart]);

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
        product,
        setProduct,
        shop,
        setTicket,
        ticket,
        cart,
        addCart,
        removeCart,
        changeCart,
        setCart,
        status,
        setStatus
    };


        return <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>



};