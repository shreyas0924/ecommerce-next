'use client'
import { StaticImageData } from 'next/image'
import { ReactNode, createContext, useState } from 'react'

export type ProductType = {
  id: number
  name: string | null
  price: number
  description: string | null
  image : string | null
  // Add more properties later
}

export type CartContextType = {
  cartItems: ProductType[]
  addToCart: (product: ProductType) => void
  removeFromCart: (productId: number) => void
  cartCounter: number
  isInCart: (product: ProductType) => boolean
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}: any) => {
  const [cartItems, setCartItems] = useState<ProductType[]>([])
  const [cartCounter, setCartCounter] = useState(0)
  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product])
    console.log('Added to cart:', product)
    setCartCounter((prev) => prev + 1)
  }

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
    setCartCounter((prev) => prev - 1)
  }

  const isInCart = (product: ProductType) => {
    return cartItems.some((item) => item.id === product.id)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, cartCounter, isInCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
