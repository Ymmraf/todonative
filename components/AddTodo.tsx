import { useState, useRef } from "react";
import { Button, TextInput, View } from "react-native";
import { useAtom } from "jotai";
import { todoList } from "../store/Todolist";
import { id } from "../store/Id";

export default function AddTodo() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useAtom(todoList)
    const [ID, setID] = useAtom(id)
    const inputRef = useRef<any>(null);

    function addTodo(title: String) {
        if(!title) {
            return
        } else {
            setTodo(todo => [...todo, {
                id: ID,
                title: title
            }])
            setInput('')
            setID(ID => ID + 1)
            inputRef.current.focus()
        }
    }
    
    return (
        <>
            <View>
                <TextInput
                    className="h-6 text-xl border-b-2 mb-4"
                    onChangeText={newInput => setInput(newInput)}
                    placeholder="Add Task"
                    defaultValue={input}
                    ref={inputRef}
                />
                <Button
                    title="Add+"
                    onPress={() => addTodo(input)}
                ></Button>
            </View>
        </>
    )
}