// src/components/AddDepartment.tsx
import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import strings from "../strings";

interface AddDepartmentProps {
  onSubmit: (text: string) => void;
}

const AddDepartment: React.FC<AddDepartmentProps> = ({ onSubmit }) => {
  const [text, setText] = React.useState("");

  const handlePress = () => {
    onSubmit(text);
    setText(strings.emptyString);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={strings.addDepartmentPlaceholder}
      />
      <Button title={strings.addDepartmentButton} onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default AddDepartment;
