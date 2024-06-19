
import React from 'react';
export default function item ({item}){
    let{name,quantity,category} = item;
    return (
        <div>
        <h1 className='text-lx'>{name}</h1>
        <p>Buy {quantity} in {category}</p>
        </div>
    )
    }

    