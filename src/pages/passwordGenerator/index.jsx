import React, { useState } from "react"
import "./pswdGen.css"
import usePasswordGen from "./hooks/usePasswordGen"

const PasswordGenerator = () => {
  let [passwordLen, setPasswordLen] = useState(0)
  const [passwordStan, setPasswordStan] = useState({ quality: "Poor", color: "red" })
  const [copyState, setCopyState] = useState(false)
  const [passwordParameters, setPasswordParameters] = useState({
    upperCase: false,
    lowerCase: false,
    includeNumbers: false,
    includeSymbols: false
  })
  //!custom hooks to generate password
  let { generatedPassword, passwordErrorMessage, handleGeneratePassword } = usePasswordGen()

  //! To handle all the checkbox selection
  const handlePasswordParameters = (e) => {
    let { name, checked } = e.target
    // console.log(name, checked)
    setPasswordParameters((prev) => ({ ...prev, [name]: checked }))
  }

  //! To handle password length
  const handlePasswordLen = (e) => {
    let { value } = e.target
    getPasswordStrength(value)
    setPasswordLen(value)
  }

  //! To provide standard of password based on length
  const getPasswordStrength = (psLen) => {
    if (psLen >= 16) {
      setPasswordStan({ quality: "Very Strong", color: "lightblue" })
    } else if (psLen >= 12) {
      setPasswordStan({ quality: "Strong", color: "lightgreen" })
    } else if (psLen >= 8) {
      setPasswordStan({ quality: "Medium", color: "gold" })
    } else {
      setPasswordStan({ quality: "Poor", color: "red" })
    }
  }

  //! Password generator handler
  const handlePasswordGeneration = () => {
    // console.log("handlePasswordGeneration invoked")
    handleGeneratePassword(passwordParameters, passwordLen)
  }

  const copyToClipboard = async (text) => {
    setCopyState(true)
    await navigator.clipboard.writeText(text)
    setTimeout(() => {
      setCopyState(false)
    }, 1000)
  }

  return (
    <div className="pswdMain">
      {generatedPassword && (
        <div className="d-flex generatedPswdDiv">
          <div>{generatedPassword}</div>
          <div>
            <button
              onClick={() => {
                copyToClipboard(generatedPassword)
              }}
            >
              {copyState ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      )}
      <div className="d-flex characterLenDiv">
        <div>Character Length</div>
        <div>{passwordLen}</div>
      </div>
      <div style={{ width: "100%", marginTop: "10px" }}>
        <input type="range" style={{ width: "100%" }} value={passwordLen} min={10} max={20} onChange={handlePasswordLen} />
      </div>
      <div className="gridLayout">
        <div>
          <input type="checkbox" name="upperCase" onChange={handlePasswordParameters} />
          <span>Include Uppercase Letters</span>
        </div>
        <div>
          <input type="checkbox" name="lowerCase" onChange={handlePasswordParameters} />
          <span>Include Lowercase Letters</span>
        </div>
        <div>
          <input type="checkbox" name="includeNumbers" onChange={handlePasswordParameters} />
          <span>Include Numbers</span>
        </div>
        <div>
          <input type="checkbox" name="includeSymbols" onChange={handlePasswordParameters} />
          <span>Include Symbols</span>
        </div>
      </div>
      {generatedPassword && (
        <div className="d-flex pswdStandardDiv">
          <div>Password Standard</div>
          <div style={{ color: passwordStan?.color }}>{passwordStan?.quality}</div>
        </div>
      )}
      {passwordErrorMessage && <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{passwordErrorMessage}</div>}
      <div>
        <button className="genPswdBtn" onClick={handlePasswordGeneration}>
          Generate Password
        </button>
      </div>
    </div>
  )
}

export default PasswordGenerator
