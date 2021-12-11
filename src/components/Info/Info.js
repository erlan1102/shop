import React from 'react';
import './Info.css'
import InfoCard from "./InfoCard";

const Info = () => {

    let array = [
        {title: 'Jordan', price: 20},
        {title: 'Nike', price: 100},
        {title: 'Adidas', price: 75},
    ];

    return (
            <section className='info'>
                <div className="container">
                    <div className="info__row">
                        {array.map((item,idx)=>{
                            return <InfoCard title={item.title} price={item.price}/>
                        })}
                    </div>
                </div>
            </section>
    );
};

export default Info;