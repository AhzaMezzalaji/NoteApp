import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const EditNote = ({ note, setCurrentPage, editNote }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDesc(note.desc);
    }
  }, [note]);

  const handleEdit = () => {
    editNote(note.id, title, desc);
    setCurrentPage("home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ubah Note</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        value={desc}
        onChangeText={setDesc}
        placeholder="Description"
        multiline
      />
      <Button title="Save" onPress={handleEdit} />
      <Button title="Cancel" onPress={() => setCurrentPage("home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default EditNote;
