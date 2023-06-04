import {createContext, useState} from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState(null)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const [productToShow, setProductToShow] = useState({})

    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            products,
            setProducts,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}