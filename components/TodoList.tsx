import { View } from "react-native";
import { useAtom } from "jotai";
import { todoList } from "../store/Todolist";
import TodoCard from "./TodoCard";

export default function TodoList() {
  const [todo, setTodo] = useAtom(todoList);
  
  return (
    <View className="h-full mb-12">
      {todo.map((item, index) => (
        <TodoCard task={item} key={`${index}-${item.title}`} />
      ))}
    </View>
  );
}
