import React, { useState } from "react"

const EmiCalculator = () => {
  const [cost, setCost] = useState(100000000)
  const [interest, setInterest] = useState(0)
  const [downPayment, setDownPayment] = useState(0)
  const [fee, setFee] = useState(0)
  const [tenure, setTenure] = useState(0)
  const [emi, setEmi] = useState(0)

  const updateEmi = (e) => {
    if (!cost) return
    let money = Number(e.target.value)

    setDownPayment(money)
    //do calculation via formula setEmi
    setEmi(money)
  }
  const updateDownPayment = (e) => {
    if (!cost) return
    let money = Number(e.target.value)

    setEmi(money)
    //do calculation via formula setDownPayment
    setDownPayment(money)
  }
  const calculateEmi = (cost) => {}
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <div>EMI calculator</div>
      <div>
        <div>Total cost of Asset</div>
        <div>
          <input type="number" />
        </div>
      </div>
      <div>
        <div>Interest Rate(in %)</div>
        <div>
          <input type="number" />
        </div>
      </div>
      <div>
        <div>Processing Fee(in %)</div>
        <div>
          <input type="number" />
        </div>
      </div>
      <div>
        <div>Down Payment</div>
        <div>
          <input type="range" min={0} max={cost} value={downPayment} onChange={updateDownPayment} />
        </div>
      </div>
      <div>
        <div>EMI per month</div>
        <div>
          <input type="range" min={0} max={calculateEmi(cost)} value={emi} onChange={updateEmi} />
        </div>
      </div>
    </div>
  )
}

export default EmiCalculator
