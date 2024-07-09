import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { Link, router } from "expo-router";
import { CartContext } from "@/context/CartContext";



const Productdetail = () => {
// const {dispatch}=useContext();

  const sizes = ["S", "M", "L"];
  const colors = ["#1D752B", "#91A1B0", "#000000"];
  const [selectedSize, setselectedSize] = useState(null);
  const [selectedColor, setselectedColor] = useState(null);

  return (
    <ScrollView style={styles.container}>
      
      
      <Image
        source={require("@/assest/jacket1.jpg")}
        style={styles.coverImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Winter Coat</Text>
        <Text style={styles.price}>$65.9</Text>
      </View>
      <View>
        <Text style={[styles.title, styles.sizeText]}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map((size) => {
            return (
              <TouchableOpacity
                onPress={() => {}}
                style={styles.sizevalueConatiner}
              >
                <Text style={styles.sizevalue}>{size}</Text>
              </TouchableOpacity>
            );
          })}
          <View style={styles.sizeContainer}></View>
        </View>
        <View>
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              fontSize: 18,
              marginVertical: 10,
            }}
          >
            Colors
          </Text>
          <View style={styles.colorContainer}>
            {colors.map((color) => {
              return (
                <TouchableOpacity
                  style={[styles.circleborder, { borderColor: color }]}
                >
                  <View style={[styles.circle, { backgroundColor: color }]} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
      <View style={{width:'100%',justifyContent:'center',}}>
      <TouchableOpacity style={styles.button} onPress={()=>{router.push('/')}}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      
       
      
      </View>
    </ScrollView>
  );
};

export default Productdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 3,
  },

  coverImage: {
    width: "100%",
    height: 430,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
  },
  price: {
    color: "#4d4c4c",
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizevalueConatiner: {
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    width: 36,
  },
  sizevalue: {
    fontSize: 18,
  },
  colorContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circle: {
    height: 38,
    width: 38,
    borderRadius: 22,
  },
  circleborder: {
    borderRadius: 27,
    height: 48,
    width: 48,
    borderWidth: 1.5,
    justifyContent: "center",
    marginHorizontal: 4,
    alignItems: "center",
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
});
