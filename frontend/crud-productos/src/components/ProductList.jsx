import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "../api/products"
import { useNavigate } from "react-router-dom"

export default function ProductList() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const loadProducts = async () => {
    const response = await getProducts()
    setProducts(response.data)
  }

  const handleDelete = async (id) => {
    await deleteProduct(id)
    setProducts(prev =>
      prev.filter(product => product.id !== id)
    )
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className="mt-8">
      <h1 className="text-xl font-bold text-sky-900">
        Productos disponibles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 text-white">
        {products.map(product => (
          <div key={product.id} className="bg-teal-800 p-4 rounded-lg shadow">
            <p>{product.nombre}</p>

            <p>
              <span className="font-bold">precio: </span>
              ${Number(product.precio).toFixed(2)}
            </p>

            <p>
              <span className="font-bold">descripcion: </span>
              {product.descripcion}
            </p>

            <div className="ml-4">
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleDelete(product.id)}
              >
                Eliminar
              </button>

              <button
                className="bg-green-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
                onClick={() => navigate(`/editar-producto/${product.id}`)}
              >
                Editar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}