// src/navigation/MainTabNavigator.tsx
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import InventoryScreen from "../screens/InventoryScreen";
import OrdersScreen from "../screens/OrderScreen";
import TasksScreen from "../screens/TasksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import strings from "../strings";

const Tab = createMaterialTopTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: strings.setting }}
      />
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{ title: strings.tasks }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: strings.orders }}
      />
      <Tab.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{ title: strings.inventory }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
