import { StyleSheet, View, Text } from "react-native"

export default function Header() {
  return (
    <View style = {styles.nav}>
      <Text style = {styles.navText}>My Todo</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  nav: {
    backgroundColor: "coral",
    padding: 12,
    marginTop: 28,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold"
  }
})