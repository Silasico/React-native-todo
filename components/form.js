import { StyleSheet, View, TextInput, Button } from "react-native"
import { useState } from "react"

const Form = ({ addTodo, setText }) => {
  
  return (
    <View>
      <TextInput
        style = {styles.input}
        onChangeText = {(val) => setText(val)}
      />
      <Button color= "coral" title = "Add Todo" onPress = {addTodo}/>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
  input: {
    padding: 10,
    color: "#000",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 10,
  }
})