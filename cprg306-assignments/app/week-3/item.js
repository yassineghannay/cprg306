// /app/week-3/item.js
"use client";
import React from 'react';



export default function Item({ name, quantity, category }) {
    return (
      <li className="border border-gray-300 bg-white p-4 mb-2 rounded-lg shadow-sm">
        <div className="font-semibold text-lg">{name}</div>
        <div className="text-gray-600">
          Buy {quantity} in {category}
        </div>
      </li>
    );
  }
