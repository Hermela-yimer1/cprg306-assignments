"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = { name, quantity: parseInt(quantity), category };
        onAddItem(newItem);
        setName("");
        setQuantity("1");
        setCategory("produce");
    };

    return (
        <form onSubmit={handleSubmit} className="bg-blue-900 w-60 p-5 mt-8 ml-96 text-black">
            <div className="flex justify-center">
                <input
                    required
                    type="text"
                    placeholder="Item name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="text-black"
                />
            </div>
            <br />
            <div className="flex justify-center">
                <input
                    required
                    type="number"
                    min="1"
                    max="99"
                    className="mr-1 w-20 text-black"
                    placeholder="1"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <br />
                <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="text-black"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen food">Frozen Food</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <br />
            <div className="flex justify-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">
                    Add Item
                </button>
            </div>
        </form>
    );
}
