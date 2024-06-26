import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [products, setProducts] = useState([])
  const getProducts = async () => {
    let resp = await fetch("https://fakestoreapi.com/products")
    let res: any = await resp.json()
    console.log("res", res)
    if (res) {
      setProducts(res?.slice(0, 6))
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  return (
    <div>
      <h3>Home Page</h3>
      <div>Top trending product ⚡️</div>
      <Link to={"/products"}>
        <button>All Product List</button>
      </Link>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(3,1fr)`,
          gridGap: "10px",
          marginTop: "10px"
        }}
      >
        {products?.map((product: any) => {
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

export default Home
