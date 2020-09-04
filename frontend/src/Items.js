import React, { useEffect } from 'react'

const Items = (props) => {
  const { items, setOrderPrice } = props
  let totalPrice = 0

  useEffect(() => {
    setOrderPrice(totalPrice);
  }, [totalPrice]);

  const updateOrderPrice = (price) => {
    totalPrice += price
  }

  return (
    <div className='items'>
      {items.map((item, i) => {
        updateOrderPrice(item.amount)

        return (
          <React.Fragment key={i}>
            <p>{item.name} - ${item.amount}</p>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Items


