import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"

const CartCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.Cardcontainer}>
          <View>
            <Image
              source={require("@/assest/bag.jpg")}
              style={styles.imageContainer}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Jean Jacket</Text>
            <Text style={styles.price}>$49</Text>
            <Text style={styles.sizeText}>L</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name={"trash"} size={32} color="#F68CB5" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default CartCard

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Cardcontainer: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    width: 120,
    height: 120,
  },
  textContainer: {
    gap: 10,
  },
  title: {
    fontSize: 20,
    color: "#444444",
  },
  price: {
    color: "#4d4c4c",
    fontSize: 20,
  },
  sizeText: {
    // marginHorizontal: 20,
    fontSize: 20,
    color: "red",
  },
  button: {
    backgroundColor: "#e96e6e",
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
})
