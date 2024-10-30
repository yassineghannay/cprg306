'use client'; 
import { useState } from 'react';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),  // Random ID
      name,
      quantity,
      category,
    };

    // Call the passed prop function to add the item
    onAddItem(newItem);

    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <div>
        <label htmlFor="name" className="block text-lg font-semibold">Item Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Quantity: {quantity}</h2>
        <div className="space-x-4">
          <button
            type="button"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => setQuantity(quantity < 100 ? quantity + 1 : 100)}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-lg font-semibold">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
