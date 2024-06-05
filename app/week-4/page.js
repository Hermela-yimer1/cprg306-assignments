"use client";
import { useState } from "react";

export default function Page() {
    const [name ,setName ] = useState("");
    const [quality, setQuality] = useState("1"); 
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        console.dir(event);
        event.preventDefault();
        console.log(name, quality, category);
        let newItem = { Name:name, Quality:quality,Category:category};
        alert(`Name: ${newItem.Name}, Quality: ${newItem.Quality}, Category: ${newItem.Category}`);

        setName("");
        setQuality("1");
        setCategory("produce");

    }
    const handleNameChange = (event) => {
        console.dir(event);
        setName(event.target.value);
        
    }
    const handleQualityChange = (event) => {
        console.dir(event);
        setQuality(event.target.value);
    }
    const handleCategoryChange = (event) => {
        console.dir(event);
        setCategory(event.target.value);
    }

    return (
       <form onSubmit={handleSubmit}>
        <div  className="flex justify-center">
            <input required type="text" placeholder="Item name" value={name} onChange={handleNameChange} Value={name} className="text-black"/>
        </div>
        <br/>

        <div className="flex justify-center">
            <input required type="number" min="1" max="99" 
            className="mr-1 w-20 text-black"
            placeholder="1" value={quality} onChange={handleQualityChange}/>
            <br/>
            <select required value={category} onChange={handleCategoryChange} className="text-black">
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Food ">Frozen Food</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <br/>
        <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40">Add Item</button>
        </div>
       </form>
    );

}
