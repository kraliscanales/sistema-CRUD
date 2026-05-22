import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/Productlist"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
    <div className="container mx-auto">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/nuevo-producto" element={<ProductForm />} />
        <Route path="/editar-producto/:id" element={<ProductForm />} />
      </Routes>
      <Toaster />
    </div>
      
    </BrowserRouter>
  )
  
}

export default App
  
   
