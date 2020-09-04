import React, { useState, useEffect } from 'react'
import TrackingData from './TrackingData'
import Items from './Items'
import axios from 'axios'

const Order = (props) => {
  const { order } = props
  const [orderPrice, setOrderPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    order.discounts.forEach((discount) => {
      switch (discount.type) {
        case 'percent':
          setTotalPrice(orderPrice - orderPrice * discount.value/100 ) // total price after percentage discount
          break
        case 'amount':
          setTotalPrice(orderPrice - discount.value) // total price after fixed amount discount
          break
        default:
          setTotalPrice(orderPrice) // no discount - order price is the final price
      }
    })
  }, [orderPrice]);

  const cancelOrder = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/orders/${id}`)
      // alert(`Order ${deletedOrder.data.orderId} is ${deletedOrder.data.status}`)
      setCancelled(true)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='order'>
      <h2>Order {order.id}</h2>
      <p id='status'><strong>Status:</strong> {cancelled ? 'CANCELLED' : order.status.toUpperCase()}</p>
      <div><strong>Items:</strong> {order.items.length} <Items items={order.items} setOrderPrice={setOrderPrice}/></div>
      <div><strong>Tracking data:</strong> <TrackingData trackingData={order.tracking}/></div>
      <button id='cancel-btn' onClick={() => cancelOrder(order.id)}> Cancel order</button>

      <h2 className='total-price'>Total Price: <s><small>${orderPrice}</small></s> ${totalPrice} </h2>
    </div>
  )
}

export default Order