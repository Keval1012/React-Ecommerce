import React from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import new_collection from '../../Json/NewCollectionsData';

const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, index) => {
                    return <Item key={index} item={item} />
                })}
            </div>
        </div>
    );
}

export default NewCollections;