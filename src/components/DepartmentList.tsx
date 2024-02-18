// src/components/DepartmentList.tsx
import React from "react";
import { Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

interface DepartmentListProps {
  departments: string[];
  onPress: (department: string) => void;
}

const DepartmentList: React.FC<DepartmentListProps> = ({
  departments,
  onPress,
}) => {
  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity onPress={() => onPress(item)}>
      <Text style={styles.item}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={departments}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  item: {
    fontSize: 18,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default DepartmentList;
