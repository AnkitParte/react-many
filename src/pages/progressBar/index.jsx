import React, { useEffect, useState } from "react"
import "./progressBar.css"

const ProgressBar = ({ progressVal = 0 }) => {
  const [percent, setPercent] = useState(progressVal)

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, progressVal)))
  }, [progressVal])
  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "5px" }}>Progress Bar</div>
      <div className="progressParentDiv">
        <span style={{ color: percent > 49 ? "white" : "black" }}>{percent.toFixed()}%</span>
        <div
          style={{ width: `${percent}%` }}
          // style={{ transition: "width 0.4s ease-in", transform: `scaleX(${percent / 100})`, transformOrigin: "left" }}
          role="progressbar"
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={percent.toFixed()}
        />
      </div>
    </>
  )
}

export default ProgressBar
