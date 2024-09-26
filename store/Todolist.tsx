import { atom } from "jotai"

export interface Task {
    id: Number,
    title: String
}

export const todoList = atom<Task[]>([])
export const finished = atom<Task[]>([])