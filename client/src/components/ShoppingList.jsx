import { useEffect } from 'react'

function ShoppingList() {
  function getData() {
    const res = fetch('http://localhost:3000/products').then(
      (response) => response.json
    )
    console.log(res)
    return res
  }

  useEffect(() => {
    getData()
  }, [])
  return <div></div>
}

export default ShoppingList
