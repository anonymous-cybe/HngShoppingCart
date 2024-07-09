import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native"
import React, { useContext } from "react"
import CartCard from "@/component/CartCard"

const Cart = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <CartCard /> */}

        <FlatList
          data={[1]}
          renderItem={CartCard}
          scrollEnabled={false}
          ListFooterComponent={
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginTop: 30,
              }}
            >
              <Text style={[styles.price]}>Total :</Text>
              <Text style={[styles.price]}>$49</Text>
            </View>
          }

        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:40}}
        ></FlatList>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingTop: 50,
  },
  price: {
    color: "#4d4c4c",
    fontSize: 20,
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
