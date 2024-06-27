import React from "react"
import { Link, useLocation } from "react-router-dom"

const linkStyle: any = {
  textTransform: "uppercase",
  textDecoration: "none",
  color: "coral",
  fontSize: "15px",
  cursor: "pointer"
}
const BreadCrumb = () => {
  let { pathname } = useLocation()
  let currentPath: any = pathname.split("/").slice(1)
  //   console.log("currentPath", currentPath)

  const Partition = () => <span style={{ color: "lightslategray" }}>{" > "}</span>
  return (
    <div style={{ margin: "20px 0px" }}>
      {pathname.length > 0 && (
        <Link to={"/"} style={linkStyle}>
          Home
        </Link>
      )}
      {currentPath?.map((path: any, idx: number) => {
        let isLast = idx === currentPath.length - 1
        let link = "/" + path
        // console.log("link", link)
        return isLast ? (
          <span style={{ textTransform: "uppercase", color: "lightslategray" }}>
            <Partition />
            {path}
          </span>
        ) : (
          <Link to={link} style={linkStyle}>
            <Partition />
            {path}
          </Link>
        )
      })}
    </div>
  )
}

export default BreadCrumb
