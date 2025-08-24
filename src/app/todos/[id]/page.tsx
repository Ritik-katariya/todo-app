'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function TodoDetailPage() {
  const searchParams = useSearchParams();
  
  const title = searchParams.get('title');
  const category = searchParams.get('category');
  const completed = searchParams.get('completed') === 'true';

  return (
    <div className="p-4 w-full h-full flex flex-col justify-start items-center text-white mt-20">
      <h1 className="text-6xl font-bold mb-4">Todo Details</h1>
      <div className="space-y-3 text-2xl">
        <p><strong>Title:</strong> {title}</p>
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Status:</strong> {completed ? 'Completed' : 'Pending'}</p>
      </div>
      <p className='mt-10 text-lg w-1/2'>
        <strong>Description:</strong> This is a detailed view of the todo item. You can add more information here as needed.
      </p>
    </div>
  )
}
