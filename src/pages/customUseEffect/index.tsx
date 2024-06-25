import React, { useState } from "react"
import useCustomUseEffect from "./useCustomUseEffect"

const CustomUseEffect = () => {
  const [count, setCount] = useState(0)

  useCustomUseEffect(() => {
    console.log("render one", count)
  }, [count])
  return (
    <div>
      <h3>CustomUseEffect</h3>
      <div>
        <div>{count}</div>
        <button onClick={() => setCount((p) => p + 1)}>Increment</button>
        <button onClick={() => setCount((p) => p - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default CustomUseEffect
