"use client";

import { useEffect, useState } from "react";
import { addTodo, TodoData, ITodo } from "@/data/data";

export default function AddTodo({
  onAdd,
}: {
  onAdd: (title: string, category: ITodo["category"]) => void;
}) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<"work" | "personal" | "other">("work");

  const handleAdd = () => {
    if (!title.trim()) return;
    onAdd(title, category);
    setTitle("");
  };



 
  return (
    <div className="flex items-center gap-2 p-2 text-white w-full mb-4 ">
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo title"
        className="border rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full "
      />

      <select
       title="category"
        name="category"
        id="category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as "work" | "personal" | "other")
        }
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-900"
      >
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="other">Other</option>
      </select>

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-12 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
}
