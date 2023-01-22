import React from 'react'
import "./CartProgressBar.css"

const CartProgressBar = () => {
  return (
  <div class="container">
    <ol class="progress-meter">
      <li class="progress-point done">Cart</li>
      <li class="progress-point done">Address</li>
      {/* <li class="progress-point todo">Payment</li> */}
      <li class="progress-point todo">Summary</li>
    </ol>
  </div>
  )
}

export default CartProgressBar