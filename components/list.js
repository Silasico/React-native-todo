import { StyleSheet, TouchableOpacity, View, Text, FlatList } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const List = ({ todo, deleteHandler }) => {
  return (
    todo.length > 0 ? <FlatList 
      data = {todo}
      renderItem = {({ item }) => (
      <TouchableOpacity onPress = {() => deleteHandler(item.id)}>
        <View style = {styles.item}>
          <MaterialIcons 
            name="delete" 
            size={18}
            color="#333" 
          />
          <Text style = {styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
      )}
    /> : <Text style = {styles.noList}>No Todo to display</Text>
  )
}

export default List
const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: "#eee",
    fontSize: 20,
    marginTop: 15,
    fontWeight: "bold",
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
  },
  noList: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
  },
  itemText: {
    marginLeft: 10,
    fontWeight: "bold"
  }
})