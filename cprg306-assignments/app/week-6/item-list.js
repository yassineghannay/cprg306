import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json'; // Import the JSON

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const items = [...itemsData];

  // Sorting items
  items.sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'category') return a.category.localeCompare(b.category);
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-200'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-200'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
