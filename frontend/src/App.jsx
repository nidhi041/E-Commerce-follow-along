import { BrowserRouter,Routes,Route } from "react-router-dom";
import { LoginPage,SignupPage,Home,CreateProduct } from "./Routes.jsx"

import './App.css';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/create-product" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;