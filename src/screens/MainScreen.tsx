// src/screens/MainScreen.tsx
import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { StackParamList } from "./types";
import AddDepartment from "../components/AddDepartment";
import DepartmentList from "../components/DepartmentList";

const MainScreen: React.FC = () => {
  const [departments, setDepartments] = React.useState<string[]>([]);

  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const handleDepartmentPress = (department: string) => {
    navigation.navigate("MainTabNavigator", {
      department: department,
      screen: "Inventory",
    });
  };

  const handleAddDepartment = (text: string) => {
    setDepartments([...departments, text]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.addDepartmentContainer}>
        {/* <Text style={styles.title}>Add Department</Text> */}
        <AddDepartment onSubmit={handleAddDepartment} />
      </View>
      <DepartmentList
        departments={departments}
        onPress={handleDepartmentPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20B2AA",
    padding: 20,
  },
  addDepartmentContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MainScreen;
