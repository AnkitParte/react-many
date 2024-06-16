import React from "react"

const PasswordStandard = ({ customClass, passwordStan }) => {
  return (
    <div className={customClass}>
      <div>Password Standard</div>
      <div style={{ color: passwordStan?.color }}>{passwordStan?.quality}</div>
    </div>
  )
}

export default PasswordStandard
