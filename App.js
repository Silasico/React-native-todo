import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,FlatList, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from "react"
import Header from "./components/header"
import Form from "./components/form"
import List from "./components/list"

export default function App() {
  const [todo, setTodo] = useState([
    {text: "Eat", id: 3},
    {text: "Wash", id: 2},
    {text: "Assignment", id: 1},
  ])
  const [text, setText] = useState("")
  
  const deleteHandler = (id) => {
    setTodo((prevTodo) => {
      return prevTodo = todo.filter((item) => item.id !== id)
    })
  }
  const addTodo = () => {
    if (text.length >3) {
      const id = todo.length < 1 ?  1 : todo[0].id + 1
      setTodo([{id: id, text: text}, ...todo])
    } else {
      Alert.alert("😩", "The todo entry must be greater than 3 characters", [
        {text: "Alright", onPress: () => console.log("alert dismissed")}
        ])
    }
  }
  
  return(
    <View style = {styles.container}>
      <Header />
      <View style = {styles.main}>
        <View style = {styles.form}>
          <Form 
            addTodo = {addTodo}
            setText = {setText}
          />
        </View>
        <View style = {styles.list}>
          <List 
            todo = {todo}
            deleteHandler = {(id) => deleteHandler(id)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    paddingHorizontal: 20,
    flex: 1,
  },
  list: {
    marginVertical: 10,
    flex: 1,
  }
});
