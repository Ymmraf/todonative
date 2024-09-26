import { View, Text, Button } from "react-native";
import { todoList, finished } from "../store/Todolist";
import { useAtom } from "jotai";

export default function TodoCard({
  task,
}: {
  task: { id: Number; title: String };
}) {
  const [todo, setTodo] = useAtom(todoList);
  const [finishedTask, setFinishedTask] = useAtom(finished);

  function handleClickDone(id: Number) {
    const clickedTask = todo.find((task) => task.id === id);
    setTodo(todo => todo.filter(task => task.id !== id))
    setFinishedTask([...finishedTask, clickedTask]);
  }

  function handleClickRemove(id: Number) {
    setTodo((todo) => todo.filter((task) => task.id !== id));
  }

  return (
    <View className="border-solid border-2 border-amber-400 mt-2 p-4 rounded-xl">
      <View>
        <Text className="text-xl ml-2">{task.title}</Text>
      </View>
      <View className="flex-row">
        <Button
          className="inline"
          title="Remove"
          onPress={() => handleClickRemove(task.id)}
        />
        <Button
          className="inline"
          title="Done"
          onPress={() => handleClickDone(task.id)}
        />
      </View>
    </View>
  );
}
