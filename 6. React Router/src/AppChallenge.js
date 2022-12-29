import React from "react"
import { Routes, Route, Link } from "react-router-dom"

import Home from "./Challenge/Home"
import Products from "./Challenge/Products"
import ProductDetail from "./Challenge/ProductDetail"

function AppChallenge() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <hr />
        <Link to="/products">Products</Link>
        <hr />
      </nav>

      <Routes>
        <Route exact path="/"
          element={<Home />}>
        </Route>

        <Route exact path="/products"
          element={<Products />}>
        </Route>

        <Route path="/products/:productID"
          element={<ProductDetail />}>
        </Route>
      </Routes>

    </div>
  )
}

export default AppChallenge