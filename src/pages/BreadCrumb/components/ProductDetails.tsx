import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const ProductDetails = () => {
  let { id } = useParams()

  const [singleProd, setSingleProd] = useState<any>({})
  const getProducts = async () => {
    let resp = await fetch(`https://fakestoreapi.com/products/${id}`)
    let res: any = await resp.json()
    console.log("res", res)
    if (res) {
      setSingleProd(res)
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  console.log("singleProd", singleProd)
  return (
    <div>
      <h3>Product Details</h3>
      {/* <div>This is Product Details page</div> */}
      <Link to={"/products"}>
        <button>Back to Product List</button>
      </Link>
      <div
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px", marginTop: "10px", padding: "10px", width: "50%" }}
      >
        <img src={singleProd?.image} alt={singleProd?.title} style={{ width: "200px", height: "200px" }} />
        <h5>{singleProd?.title}</h5>
        <span>{singleProd?.description}</span>
        <h4>$ {singleProd?.price}</h4>
      </div>
    </div>
  )
}

export default ProductDetails
