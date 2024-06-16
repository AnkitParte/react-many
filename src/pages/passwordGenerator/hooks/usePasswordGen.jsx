import React, { useState } from "react"

//! Custom hook to generate Password
const usePasswordGen = () => {
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
  const [generatedPassword, setGeneratedPassword] = useState("")

  const handleGeneratePassword = (checkboxes, length) => {
    if (length === 0) {
      setPasswordErrorMessage("Please provide password length.")
      setGeneratedPassword("")
      return
    }
    let checkKeys = Object.keys(checkboxes).filter((it) => checkboxes[it])
    if (checkKeys.length === 0) {
      setPasswordErrorMessage("Please select at least one checkbox.")
      setGeneratedPassword("")
      return
    }
    let charSet = ""

    for (let key in checkboxes) {
      if (key === "upperCase" && checkboxes[key]) {
        charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      } else if (key === "lowerCase" && checkboxes[key]) {
        charSet += "abcdefghijklmnopqrstuvwxyz"
      } else if (key === "includeNumbers" && checkboxes[key]) {
        charSet += "0123456789"
      } else if (key === "includeSymbols" && checkboxes[key]) {
        charSet += "!@#$%^&*()"
      }
    }
    let i = 0
    let newGenPassword = ""
    while (i < length) {
      let idx = Math.floor(Math.random() * charSet.length)
      newGenPassword += charSet[idx]
      i++
    }
    setGeneratedPassword(newGenPassword)
    setPasswordErrorMessage("")
  }
  return { generatedPassword, passwordErrorMessage, handleGeneratePassword }
}

export default usePasswordGen
