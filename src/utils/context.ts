import { createContext } from "react";

export type T = {
        setTodo:React.Dispatch<React.SetStateAction<{ id:string;title: string; image: string; urgency: string; completed: boolean; description: string; }[] | null>>,
        todo: { id:string;title: string; image: string; urgency: string; completed: boolean; description: string; }[] | null
    }
export const Context = createContext<T | null>(null)