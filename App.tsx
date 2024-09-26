import { Provider } from "jotai";
import HomeScreen from "./components/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FinishedScreen from "./components/FinishedScreen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Finished Task" component={FinishedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}