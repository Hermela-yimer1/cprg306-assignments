

import React from 'react';

export default function Item({ item }) {
    const { name, quantity, category } = item;
    return (
        <div>
            <h1 className='text-xl'>{name}</h1>
            <p>{quantity}, {category}</p>
        </div>
    );
}

   

    