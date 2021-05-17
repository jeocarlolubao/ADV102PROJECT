import { StatusBar } from "expo-status-bar";
import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from "react-native";
import Task from "./components/Task";

export default function App() {
  const [notes, setNotes] = useState();
  const [notesItems, setNotesItems] = useState([]);

  const AddNotes = () =>  {
    Keyboard.dismiss();
    console.log(notes);
    setNotesItems([...notesItems, notes])
    setNotes(null);
  }

  const deleteTask = (index) => {
    let itemsCopy = [...notesItems];
    itemsCopy.splice(index, 1);
    setNotesItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} keyboardShouldPersistTaps='handled'>
        <View style={styles.tasksWrapper}>
          <Text style={styles.AppTitle}> Quick Notes </Text>

          <View style={styles.TaskList}>
            {/* provides a list of notes */}
          {
            notesItems.map((item, index) => 
            {
              return (
                <TouchableOpacity key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
                
              )
            })
          }
         
          </View>
        </View>
      </ScrollView>
      <KeyboardAvoidingView style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} placeholder={"Write a note"} value={notes} onChangeText={notes => setNotes(notes)}/>

        <TouchableOpacity onPress={() => AddNotes()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  AppTitle: {
    fontSize: 30,
    color: "#0085FF",
  },
  TaskList: {
    marginTop: 20,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,  
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#0085FF',
    borderWidth: 3,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#0085FF',
    borderWidth: 3,
    width: 300,
    fontSize: 20,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: -40
  },
  addText:{
    fontSize: 30
  },
});
