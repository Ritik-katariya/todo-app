"use client";
import AddTodo from "@/components/AddTodo";
import SearchTodo from "@/components/Search";
import Todo from "@/components/todo/Todo";
import { TodoData, ITodo } from "@/data/data";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>(TodoData);
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter") || "all";

  useEffect(() => {
    if (filter === "all") {
      setTodos(TodoData);
    } else {
      setTodos(TodoData.filter((todo) => todo.category === filter));
    }
  }, [filter]);

  const handleAdd = (title: string, category: ITodo["category"]) => {
    const newTodo: ITodo = {
      id: Date.now(),
      title,
      category,
      completed: false,
    };
    
    setTodos((prev) => [...prev, newTodo]);
    TodoData.push(newTodo);
  };

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    const idx = TodoData.findIndex((t) => t.id === id);
    if (idx !== -1) TodoData.splice(idx, 1);
  };

  const handleToggle = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    const idx = TodoData.findIndex((t) => t.id === id);
    if (idx !== -1) TodoData[idx].completed = !TodoData[idx].completed;
  };

  const handleCheckAll = () => {
    setTodos(TodoData.map((todo) => ({ ...todo, completed: true })));
    TodoData.forEach((t) => (t.completed = true));
  };

  const handleUncheckAll = () => {
    setTodos(TodoData.map((todo) => ({ ...todo, completed: false })));
    TodoData.forEach((t) => (t.completed = false));
  };

  const handleSearch = (querySearch: string) => {
    if (!querySearch.trim()) {
      if (filter === "all") {
        setTodos(TodoData);
      } else {
        setTodos(TodoData.filter((todo) => todo.category === filter));
      }
      return;
    }
    setTodos(
      TodoData.filter((todo) =>
        todo.title.toLowerCase().includes(querySearch.toLowerCase())
      ).filter((todo) =>
        filter === "all" ? true : todo.category === filter
      )
    );
  };

  return (
    <div className="flex justify-center items-center w-screen gap-4">
      <div className="h-full flex flex-col justify-center items-center w-1/2 ">
        <AddTodo onAdd={handleAdd} />

        <div className="w-full border border-gray-700 rounded-md p-4 flex flex-col space-y-4 bg-gray-800">
          {todos.map((todo) => (
            <Todo
              todo={todo}
              key={todo.id}
              onDelete={handleDelete}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
      <SearchTodo
        onSearch={handleSearch}
        onCheckAll={handleCheckAll}
        onUncheckAll={handleUncheckAll}
      />
    </div>
  );
}
