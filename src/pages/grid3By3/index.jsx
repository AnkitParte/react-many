import React, { useEffect, useRef, useState } from "react"
import "./gridStyles.css"

let configDef = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]
const Grid3By3 = () => {
  const [config, setConfig] = useState(configDef)
  const [order, setOrder] = useState([])
  const [isDeActive, setIsDeActive] = useState(false)

  const handleBoxSelect = (i, j, val) => {
    let tempGrid = [...config]
    tempGrid[i][j] = val
    if (val) setOrder([...order, [i, j]])

    setConfig([...tempGrid])
  }
  const deActive = () => {
    setIsDeActive(true)
    let newOrder = [...order]
    let timer = setInterval(() => {
      let [i, j] = newOrder.pop()
      handleBoxSelect(i, j, 0)
      if (newOrder.length == 0) {
        clearInterval(timer)
        setIsDeActive(false)
        setOrder([])
      }
    }, 300)
  }
  useEffect(() => {
    if (order.length == 8) deActive()
  }, [order])

  return (
    <div className="mainGridDiv">
      {config?.map((it, i) => {
        return (
          <>
            {it?.map((_, j) => {
              return (
                <div
                  style={{
                    background: config[i][j] === 1 ? "green" : "white",
                    border: i == 1 && j == 1 ? "" : "2px solid black",
                    cursor: isDeActive || config[i][j] === 1 ? "not-allowed" : "pointer"
                  }}
                  onClick={() => {
                    handleBoxSelect(i, j, 1)
                  }}
                  disabled={isDeActive || config[i][j] === 1}
                ></div>
              )
            })}
          </>
        )
      })}
    </div>
  )
}

export default Grid3By3
