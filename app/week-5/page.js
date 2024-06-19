

import ItemList from "./item-list";
import React from "react";

export default function Page (props) {
    let{items} = props;
    return (
        <div>
        <h1 className="text-3xl font-bold m-2 p-2 text-balance">Shopping List</h1>
        <ItemList items={items} />
        
        </div>
    
    )
}