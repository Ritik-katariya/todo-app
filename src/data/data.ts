
export interface ITodo {
  id: number;
  title: string;
  category: "work" | "personal" | "other";
  completed: boolean;
}

export const TodoData: ITodo[] = [
  { id: 1, title: "Finish project", category: "work", completed: false },
  { id: 2, title: "Buy groceries", category: "personal", completed: true },
  { id: 3, title: "Read a book", category: "other", completed: false },
];





