import React from 'react';
import './Popular.css';
import data_product from '../../Json/data';
import Item from '../Item/Item';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, inedx) => {
                    return <Item key={inedx} item={item} popular='popular' />
                })}
            </div>
        </div>
    );
}

export default Popular;