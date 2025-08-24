
export interface ITodo {
  id: number;
  title: string;
  category: "work" | "personal" | "other";
  completed: boolean;
}

export let TodoData: ITodo[] = [
  { id: 1, title: "Finish project", category: "work", completed: false },
  { id: 2, title: "Buy groceries", category: "personal", completed: true },
  { id: 3, title: "Read a book", category: "other", completed: false },
];


export function addTodo(title: string, category: ITodo["category"]) {
  const newTodo: ITodo = {
    id: Date.now(),
    title,
    category,
    completed: false,
  };
  TodoData.push(newTodo);
  return newTodo;
}


