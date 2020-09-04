import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Order from './Order'
import axios from 'axios'

const Orders = (props) => {
  const [orders, setOrders] = useState({})
  const [userInfo, setUserData] = useState({})
  const { authenticatedUserId, setAuthenticatedUserId } = props

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await axios.get(`http://localhost:3001/users/${authenticatedUserId}/orders`)
        const userData = await axios.get(`http://localhost:3001/users/${authenticatedUserId}/`)
        setOrders(ordersData.data.orders)
        setUserData(userData.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchOrders()
  }, [])

  if (!authenticatedUserId) {
    return <Redirect to='/login' />
  }

  return (
    <React.Fragment>
      <h1>{userInfo.firstName} {userInfo.lastName}'s Orders</h1>
      <div className='orders'>
        {Object.values(orders).map((order, i) => {
          return <Order order={order} key={i}/>
        })}
      </div>
      <button className='logout' onClick={() => setAuthenticatedUserId(null)}>Logout</button>
    </React.Fragment>
  )
}

export default Orders;
