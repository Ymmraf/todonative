import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import { ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <AddTodo />
        <TodoList />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 30,
    },
  });