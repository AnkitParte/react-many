export const checkBoxList = [
  { title: "Include Uppercase Letters", name: "upperCase" },
  { title: "Include Lowercase Letters", name: "lowerCase" },
  { title: "Include Numbers", name: "includeNumbers" },
  { title: "Include Symbols", name: "includeSymbols" }
]
//! To provide standard of password based on length
export const getPasswordStrength = (psLen) => {
  if (psLen >= 16) {
    return { quality: "Very Strong", color: "lightblue" }
  } else if (psLen >= 12) {
    return { quality: "Strong", color: "lightgreen" }
  } else if (psLen >= 8) {
    return { quality: "Medium", color: "gold" }
  } else {
    return { quality: "Poor", color: "red" }
  }
}
