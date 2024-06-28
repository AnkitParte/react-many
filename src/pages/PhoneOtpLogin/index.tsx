import React, { useState } from "react"
import PhoneOtp from "./components/PhoneOtp"

const PhoneOtpLoginBox = () => {
  const [phone, setPhone] = useState<string>("")
  const [error, setError] = useState<any>({ error: "", status: "" })

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target)
    let regex = /^[0-9]/
    if (phone?.length < 10 && regex.test(phone)) {
      setError({ ...error, status: "INVALID" })
    } else {
      setError({ ...error, status: "VALID" })
    }
  }
  const onSubmitOtp = (otp: string) => {
    console.log("onSubmitOtp", otp)
  }
  return (
    <div style={{ margin: "auto", width: "20%" }}>
      <h3>Phone Otp Login Box </h3>
      <div>
        {error?.status == "" && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="enter phone number..."
              style={{
                border: "1px solid black",
                width: "230px",
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
            <div>
              <button type="submit" style={{ width: "260px", padding: "10px 0px" }}>
                Submit
              </button>
            </div>
          </form>
        )}
        {error?.status == "INVALID" && <div>Invalid Phone Number</div>}
        {error?.status == "VALID" && <PhoneOtp length={5} onSubmitOtp={onSubmitOtp} />}
      </div>
    </div>
  )
}

export default PhoneOtpLoginBox
