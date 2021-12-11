import React from 'react';

const InfoCard = ({title, price}) => {
    return (
        <div className='info__card'>
            <h3>{title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ipsum quis reprehenderit tempore voluptatibus? Magni, nam soluta! Alias quam, reiciendis.</p>
            <p><b>PRICE :</b> {price} $</p>
            <button type='button'>Купить</button>
        </div>
    );
};

export default InfoCard;