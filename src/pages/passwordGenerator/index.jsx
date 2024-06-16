import React, { useState } from "react"
import "./pswdGen.css"
import usePasswordGen from "./hooks/usePasswordGen"
import CommonCheckbox from "./components/CommonCheckbox"
import { checkBoxList, getPasswordStrength } from "./utils"
import CommonButton from "./components/CommonButton"

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
    let passwordStan = getPasswordStrength(value)
    setPasswordStan(passwordStan)
    setPasswordLen(value)
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
            <CommonButton
              text={copyState ? "Copied" : "Copy"}
              onClick={() => {
                copyToClipboard(generatedPassword)
              }}
            />
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
        {checkBoxList?.map((checkBoxItem, idx) => {
          return <CommonCheckbox key={idx} title={checkBoxItem?.title} name={checkBoxItem?.name} onChange={handlePasswordParameters} />
        })}
      </div>
      {generatedPassword && (
        <div className="d-flex pswdStandardDiv">
          <div>Password Standard</div>
          <div style={{ color: passwordStan?.color }}>{passwordStan?.quality}</div>
        </div>
      )}
      {passwordErrorMessage && <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>{passwordErrorMessage}</div>}
      <div>
        <CommonButton text={"Generate Password"} onClick={handlePasswordGeneration} customClass={"genPswdBtn"} />
      </div>
    </div>
  )
}

export default PasswordGenerator
