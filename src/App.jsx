import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import ProductDetailScreen from "./Screens/ProductDetailScreen/ProductDetailScreen"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen"
import CreateProductScreen from "./Screens/CreateProductScreen/CreateProductScreen"


function App() {

  return (
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/product/:product_id' element={<ProductDetailScreen/>} />
          <Route path='/login' element={<LoginScreen/>} />
          <Route path='/register' element={<RegisterScreen/>} />
          <Route path='/product/new' element={<CreateProductScreen/>} />
        </Routes>
      </div>
  )
}

export default App
