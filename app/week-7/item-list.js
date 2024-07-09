"use client";
import { useState } from 'react';
import Item from './item';
import items from './items.json'; // assuming the JSON file is in the same directory

export default function ItemList() {
    const [displayMode, setDisplayMode] = useState("list"); // list or grid
    const [sortBy, setSortBy] = useState("name"); // Sort by name by default

    // Sort the items based on the sortBy state
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    // Group items by category
    const groupedCategories = items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});

    // Sort the grouped categories
    const sortedGroupedCategories = Object.keys(groupedCategories).sort((a, b) => {
        return a.localeCompare(b);
    });

    // Render the grouped categories
    const renderGroupedCategories = () => {
        return sortedGroupedCategories.map(category => (
            <div key={category} className='p-2 m-4 bg-slate-900 max-w-sm'>
                <h2 className='underline font-bold'>{category}</h2>
                <ul>
                    {groupedCategories[category].map(item => (
                        <li key={item.name} className=''>
                            <Item item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    // Display the items based on the displayMode state
    if (displayMode === "grid") {
        return (
            <div className='grid grid-cols-3 gap-4'>
                {sortedItems.map(item => (
                    <div key={item.name} className='p-2 m-4 bg-blue-900 max-w-sm'>
                        <Item item={item} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div>
            <section className='p-2 m-4 bg-gray-600 max-w-sm'>
                <div className='flex items-center gap-6 justify-center'>
                    <label>Sort by:</label>
                    <button onClick={() => setSortBy("name")} className={sortBy === "name" ? 'bg-blue-500' : 'bg-red-500'}> Name</button>
                    <button onClick={() => setSortBy("category")} className={sortBy === "category" ? 'bg-blue-500' : 'bg-red-500'}>Category</button>
                    <button onClick={() => setSortBy("groupedCategories")} className={sortBy === "groupedCategories" ? 'bg-blue-500' : 'bg-red-500'}>Grouped</button>
                </div>
            </section>
            {sortBy === "groupedCategories" ? (
                renderGroupedCategories()
            ) : (
                <ul>
                    {sortedItems.map(item => (
                        <li key={item.name} className='p-2 m-4 bg-slate-900 max-w-sm'>
                            <Item item={item} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
