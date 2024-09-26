import { View, Text } from "react-native";

export default function FinishedCard({
  task,
}: {
  task: { id: Number; title: String };
}) {
  return (
    <View key={`${task.id}-${task.title}`} className="border-solid border-2 border-emerald-500 mt-2 p-4 rounded-xl">
      <Text className="text-xl ml-2">{task.title}</Text>
    </View>
  );
}
