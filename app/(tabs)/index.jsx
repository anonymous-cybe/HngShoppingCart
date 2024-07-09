import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native"
import React, { useState, useContext } from "react"
import { ScrollView } from "react-native"
import data from "../src/constants/Data.json"
import { Link } from "expo-router"
import { CartContext, ContextProvider } from "@/context/CartContext"

const Index = () => {
  const [products, setProducts] = useState(data.products)
  return (
    
    <View style={styles.container}>
      <Text style={styles.titlePage}>Product</Text>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#00640070"
        style={styles.textInput}
      />

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.content}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Link href="../src/page/Productdetail">
                <Text
                  style={{
                    color: "grey",
                    textDecorationStyle: "solid",
                    textDecorationLine: "underline",
                    fontSize: 10,
                  }}
                >
                  See more
                </Text>
              </Link>
            </View>
          </View>
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      ></FlatList>
    </View>
    
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  productContainer: {
    flex: 1,
    marginTop: 40,
  },
  coverImage: {
    height: 256,
    width: "90%",
    borderRadius: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    color: "#9c9c9c",
  },
  content: {
    paddingLeft: 10,
  },
  textInput: {
    backgroundColor: "#ffffff",
    padding: 8,
    borderRadius: 15,
    fontSize: 16,
    marginTop: 15,
  },
  titlePage: {
    fontSize: 32,
    color: "#006400",
    marginBottom: 15,
    fontFamily: "sans-serif",
  },
})
