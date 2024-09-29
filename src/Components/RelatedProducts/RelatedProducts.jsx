import React from 'react';
import './RelatedProducts.css';
import Item from '../Item/Item';
import data_product from '../../Json/data';

const RelatedProducts = () => {
    return (
        <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item, index) => {
                    return <Item key={index} item={item} popular='popular' />
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;