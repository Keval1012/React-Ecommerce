import React, { useContext } from 'react';
import './ProductDisplay.css';
import { FaStar } from "react-icons/fa6";
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdislay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img src={product.image} alt="" className='productdisplay-main-img' />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <FaStar className='star_icon' />
                    <FaStar className='star_icon' />
                    <FaStar className='star_icon' />
                    <FaStar className='star_icon' />
                    <FaStar className='star_dull_icon' />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category: </span>{product.category}, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;