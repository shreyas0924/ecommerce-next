'use client'
import { ReactNode, createContext, useState } from 'react'

export type ProductType = {
  id: number
  name: string | null
  price: number
  description: string | null
  // Add more properties later
}

export type CartContextType = {
  cartItems: ProductType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (productId: number) => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: any) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product])
    console.log('Added to cart:', product)
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
