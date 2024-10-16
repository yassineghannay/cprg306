
import React from 'react';
import NewItem from './new-item';

export default function Page() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Item</h1>
      <NewItem />
    </div>
  );
}
