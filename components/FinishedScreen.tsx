import { ScrollView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { finished } from "../store/Todolist";
import FinishedCard from "./FinishedCard";

export default function FinishedScreen() {
  const [task, setTask] = useAtom(finished)
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        {
          task.map((task) => 
            <FinishedCard task={task}/>
          )
        }
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
  });