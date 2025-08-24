"use client";
import React from "react";
import { ITodo } from "@/data/data";
import { iconCross,iconRedirect } from "@/icons/Icons";
import { useRouter } from "next/navigation";

interface TodoProps {
  todo: ITodo;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

export default function Todo({ todo, onDelete, onToggle }: TodoProps) {



const router = useRouter();
const redirect = () => {
  router.push(`/todos/${todo.id}/?title=${todo.title}&category=${todo.category}&completed=${todo.completed}`);
}

  
  return (
    <div className="flex justify-between items-center border-b border-gray-700 p-2 text-white">
      <div className="flex items-center gap-2">
        <input type="checkbox" id={`${todo.id}`} checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <label htmlFor={`${todo.id}`}>{todo.title}</label>
      </div>
     <span className="flex gap-16 pr-4">
       <button className="cursor-pointer hover:scale-110" onClick={redirect}>{iconRedirect}</button>
      <button className="cursor-pointer hover:scale-110" onClick={() => onDelete(todo.id)}>{iconCross}</button>
     </span>
    </div>
  );
}
