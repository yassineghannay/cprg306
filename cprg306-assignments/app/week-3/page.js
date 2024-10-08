// /app/week-3/page.js

import React from 'react';
import ItemList from './item-list'; 

export default function Page() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
}
