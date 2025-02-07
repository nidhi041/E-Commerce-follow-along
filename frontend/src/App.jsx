import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage,Home,CreateProduct,MyProducts } from "./Routes.jsx"

import './App.css';

function App  () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
        <Route path="/my-products" element={<MyProducts/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;