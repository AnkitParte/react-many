import React, { useMemo, useState } from "react"
import useCustomUseMemo from "./useCustomUseMemo"

const CustomUserMemo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const squaredValue = () => {
    console.log("EXPENSIVE CALCULATION")
    return count * count
  }
  //   const memoizeSquaredVal = useMemo(squaredValue, [count])
  const memoizeSquaredVal = useCustomUseMemo(squaredValue, [count])
  return (
    <div style={{ width: "60%", margin: "auto", padding: "20px" }}>
      <h2>Counter 1 - {count}</h2>
      <h3>Exp task - {memoizeSquaredVal}</h3>
      <button onClick={() => setCount((p) => p + 1)}>Increment 1</button>
      <h2>Counter 2 - {count2}</h2>
      <button onClick={() => setCount2((p) => p + 1)}>Increment 2</button>
    </div>
  )
}

export default CustomUserMemo
