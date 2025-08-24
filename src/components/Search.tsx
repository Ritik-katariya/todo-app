"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { iconSearch } from "@/icons/Icons";
export default function SearchTodo({onSearch, onCheckAll, onUncheckAll}: {onSearch: (search: string) => void, onCheckAll: () => void, onUncheckAll: () => void}) {
   const router = useRouter();
  const searchParams = useSearchParams();

  
  const [search, setSearch] = useState("");
  useEffect(() => {
      onSearch(search);
  }, [search]);


function handleFilter(filter: string) {
    
    const params = new URLSearchParams(searchParams.toString());
    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }
    router.push(`/?${params.toString()}`);
   
  
}
  
  
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-2 text-white w-1/4 mb-4">
      <div className="flex items-center gap-2 p-2 text-white w-full mb-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Todo"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="border rounded-md px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <button className="absolute right-52 text-white px-2 py-2 rounded-md cursor-pointer "
        >
          {iconSearch}
        </button>
      </div>
      <span className="flex  items-center">
          <h4 className="font-semibold text-lg">Filters:- </h4>
      <ul className="flex">
        <li className="p-2 underline cursor-pointer rounded-md w-full" onClick={() => handleFilter("all")}>All</li>
        <li className="p-2 underline cursor-pointer rounded-md w-full" onClick={() => handleFilter("work")}>Work</li>
        <li className="p-2 underline cursor-pointer rounded-md w-full" onClick={() => handleFilter("personal")}>Personal</li>
        <li className="p-2 underline cursor-pointer rounded-md w-full"  onClick={() => handleFilter("other")}>Other</li>
      </ul>
      </span>
      <div className="flex justify-around w-full mt-4">
        <button className="bg-blue-500  cursor-pointer hover:scale-105 px-2 py-1 rounded-md" onClick={onUncheckAll}>
            UnCheck All
        </button>
        <button className="bg-blue-500  cursor-pointer hover:scale-105 px-2 py-1 rounded-md" onClick={onCheckAll}>
            Check All
        </button>
      
      </div>
    </div>
  );
}
