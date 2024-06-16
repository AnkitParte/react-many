import React from "react"

const CommonCheckbox = ({ name, onChange, title }) => {
  return (
    <div>
      <input type="checkbox" name={name} onChange={onChange} />
      <span>{title}</span>
    </div>
  )
}

export default CommonCheckbox
