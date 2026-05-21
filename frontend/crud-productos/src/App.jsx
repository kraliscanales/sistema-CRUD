import { BrowserRouter, Route, Routes } from "react-router"
import { Toaster } from "react-hot-toast"
import ProductForm from "./components/ProductForm"
import ProductList from "./components/productlist"
import Header from "./components/header"

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
  
   
