import { View, Text, Image } from "react-native"
import React, { useContext } from "react"

import { Tabs } from "expo-router"
import { TabBarIcon } from "@/component/TarBarIcon"
import {ContextProvider} from '@/context/CartContext'

const _layout = () => {
  return (
    
    
    
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#e96e6e",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Product",
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? "list" : "list-outline"}
                style={{ color: focused ? "#e96e6e" : "gray" }}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Cart"
          options={{
            title: "cart",
            tabBarIcon: ({ color, focused }) =>{
              return(                
                  <TabBarIcon
                  name={focused ? "cart" : "cart-outline"}
                  style={{ color: focused ? "#e96e6e" : "gray" }}
                />              
                
              )
            },
          }}
        />
      </Tabs>
  )
}

export default _layout
