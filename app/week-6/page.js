"use client";
import ItemList from "./item-list";
import React from "react";
import NewItem from "./new-items";
import ItemData from "./items.json"; // Correct import path

export default function Page() {
    // Initialize a state variable with data from items.json
    const [items, setItems] = React.useState(ItemData);

    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold m-2 p-2 text-balance">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </div>
    );
}
