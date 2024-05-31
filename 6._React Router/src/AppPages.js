import React from "react"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import Header from "./pages/Header"
import Profile from "./pages/profile/Profile"
import Info from "./pages/profile/Info"
import Settings from "./pages/profile/Settings"
import Footer from "./pages/Footer"

import Navbar from "./pages/Navbar"
import ServicesList from "./pages/services/ServicesList"
import ServiceDetail from "./pages/services/ServiceDetail"


function AppPages() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/"
          element={<Main />}>
        </Route>

        <Route path="/profile"
          element={<Profile />}>
        </Route>

        <Route path="/profile/info"
          element={<Info />}>
        </Route>

        <Route path="/profile/settings"
          element={<Settings />}>
        </Route>

      </Routes>
      <Footer />

      <hr />

      <Navbar />
      <Routes>
        <Route path="/services"
          element={<ServicesList />}>
        </Route>
        <Route path="/services/:serviceID"
          element={<ServiceDetail />}>
        </Route>

      </Routes>

    </div>
  )
}

export default AppPages
