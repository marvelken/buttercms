import { React, useState, useEffect } from 'react';
import { HandleFetch } from './Api';
import './App.css';



function Product() {
    const [pro, setPro] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                await HandleFetch().then((data) => {
                    setPro(data);
                })
            } catch (err) {
                console.log(err);
            }
        };
        getList();
    }, []);


    return (
        <div className='pizza' >
            {pro &&
                pro.map((item) => {
                    return (
                        
                            <div style={{backgroundImage: `url(${item.image})`}} className='pizza1'>
                            <h3>{item.name}</h3>
                            <p>{item.decription}</p>
                            <p>{item.amount}$</p>
                            <button className='btn'>Add to basket</button>
                            </div>
                      
                    )
                })}
        </div>
    );
}

export default Product;
