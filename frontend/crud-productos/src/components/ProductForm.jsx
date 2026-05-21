import { useEffect, useState } from "react"
import { createProduct, getProduct, updateProduct } from "../api/products"
import { useNavigate, useParams } from "react-router"
import toast from "react-hot-toast"

export default function ProductForm() {
    const [product, setProduct] = useState({
        nombre: "",
        precio: 0,
        descripcion: ""
    })

    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const loadProduct = async () => {
            if (params.id) {
                const response = await getProduct(params.id)
                setProduct(response.data)
            }

        }
        loadProduct()
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (params.id) {
            await updateProduct(params.id, product)
            toast.success("Producto actualizado exitosamente")

        }else{
            await createProduct(product)
            toast.success("Producto creado exitosamente")
        }
        navigate("/")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                    <input 
                    value={product.nombre}
                    type="text" placeholder="Nombre del producto" 
                    onChange = {(e) => setProduct({...product, nombre: e.target.value})}     
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name"/>
                   
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Precio</label>
                    <input
                    value={product.precio}
                    type="number" placeholder="Precio del producto"
                    onChange = {(e) => setProduct({...product, precio: e.target.value})}     
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Descripción</label>
                    <textarea
                    value={product.descripcion}
                    onChange = {(e) => setProduct({...product, descripcion: e.target.value})}   
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Descripción del producto"></textarea>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" >Guardar</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg ml-2">Cancelar</button>
                </div>
            </form>
        </div>
    )
} 