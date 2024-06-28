import React, { useEffect, useRef, useState } from "react"

const PhoneOtp = ({ length, onSubmitOtp }) => {
  const [otp, setOtp] = useState<any>(new Array(length).fill(""))
  const inputRef = useRef<any>([])

  const handleChange = (index: any, e: any) => {
    let value = e.target.value
    if (isNaN(value)) return
    let newOtp = [...otp]
    newOtp[index] = value.substring(value.length - 1)
    // console.log("value", value.substring(value.length - 1))
    // console.log("newOtp", newOtp)
    setOtp(newOtp)

    let combinedOtp = newOtp.join("")
    if (combinedOtp.length == 4) onSubmitOtp(combinedOtp)

    if (value && index < length - 1 && inputRef.current[index + 1]) {
      if (!newOtp[index + 1]) {
        inputRef.current[index + 1].focus()
      } else {
        inputRef.current[newOtp.indexOf("")].focus()
      }
    }
  }
  const handleClick = (index: any) => {
    inputRef.current[index].setSelectionRange(1, 1)
    // if (index > 0 && !otp[index - 1]) {
    //   inputRef.current[otp.indexOf("")].focus()
    // }
  }
  const handleKeyDown = (index: any, e: any) => {
    // console.log("handleKeyDown", e.key)
    if (e.key == "Backspace") {
      if (index > 0 && inputRef.current[index - 1] && !otp[index]) {
        inputRef.current[index - 1].focus()
      }
    }
  }
  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus()
    }
  }, [])
  //8976897634
  return (
    <div>
      <h3>This is Phone Otp</h3>
      <div>
        {otp.map((i: any, idx: any) => {
          return (
            <input
              type="text"
              onChange={(e) => handleChange(idx, e)}
              onClick={() => handleClick(idx)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              //   maxLength={1}
              ref={(input) => (inputRef.current[idx] = input)}
              key={idx}
              value={i}
              style={{
                border: "1px solid black",
                width: "30px",
                height: "30px",
                textAlign: "center",
                margin: "5px",
                padding: "5px",
                borderRadius: "5px",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                backgroundColor: "white",
                color: "black",
                fontSize: "18px"
              }}
            />
          )
        })}
      </div>
      <div>
        <button style={{ width: "260px", padding: "10px 0px" }}>Verify OTP</button>
      </div>
    </div>
  )
}

export default PhoneOtp
