'use client'
import { createContext, useState } from 'react'

export type ProductType = {
  id: number
  name: string
  price: number
  // Add more properties later
}

export type CartContextType = {
  cartItems: ProductType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (productId: number) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider: React.FC = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product])
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
