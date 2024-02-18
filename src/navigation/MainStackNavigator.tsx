// src/navigation/MainStackNavigator.tsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen";
import MainTabNavigator from "./MainTabNavigator";
import strings from "../strings";
import { RouteProp } from "@react-navigation/native";

const Stack = createStackNavigator();

type MainTabNavigatorRouteProp = RouteProp<
  {
    MainTabNavigator: {
      department: string;
    };
  },
  "MainTabNavigator"
>;

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={strings.mainScreenTitle}
        component={MainScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          headerStyle: { backgroundColor: "#00CED1" },
        }}
      />
      <Stack.Screen
        name="MainTabNavigator"
        component={MainTabNavigator}
        options={({ route }) => ({
          headerShown: true,
          headerTitle:
            (route as MainTabNavigatorRouteProp).params?.department ||
            "General", // Set header title dynamically
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
        })}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
