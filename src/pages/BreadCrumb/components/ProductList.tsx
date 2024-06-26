import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ProductList = () => {
  const [productsList, setProductsList] = useState([])
  const getProducts = async () => {
    let resp = await fetch("https://fakestoreapi.com/products")
    let res: any = await resp.json()
    console.log("res", res)
    if (res) {
      setProductsList(res)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <h3>Product List</h3>
      <div>This is Product List page</div>
      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3,1fr)`,
          gridGap: "10px",
          marginTop: "10px"
        }}
      >
        {productsList?.map((product: any) => {
          return (
            <Link to={`/products/${product.id}`}>
              <div key={product.id} style={{ padding: "10px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", minHeight: "300px" }}>
                <img src={product.image} alt={product.title} style={{ width: "100%", height: "170px" }} />
                <div>{product.title}</div>
                <h4>$ {product.price}</h4>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
