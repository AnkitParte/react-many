import React from "react"
import { Route, Routes } from "react-router-dom"
import { AboutPage, HomePage, ProfilePage } from "../Components"

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default MyRouter
