import { View, Text } from "react-native"
import React, { useReducer } from "react"
import { createContext } from "react"
import {Data} from '@/app/src/constants/Data.json'
import CartReducer from "./CartReducer"

export const CartContext = createContext();
const [cart,dispatch] = useReducer(CartReducer,[])
export const ContextProvider = ({children}) => {
    
  return <CartContext.Provider value={{cart,dispatch}}>{children}</CartContext.Provider>
}
