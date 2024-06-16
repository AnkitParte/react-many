import React from "react"

const CommonButton = ({ text, customClass, onClick }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {text}
    </button>
  )
}

export default CommonButton
