'use client';

import { useState } from 'react';

const NewItem = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 100) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Quantity: {quantity}</h2>
      <div className="space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-red-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 100}
          className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewItem;
