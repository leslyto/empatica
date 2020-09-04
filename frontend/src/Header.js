import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='titleWrapper'>
        <h1>Smart technology for people <br /> living with epilepsy</h1>
        <Link to='/login'> <button> Buy Now</button> </Link>
        <p>Comes with a 30-day Free Trial Subscription</p>
      </div>
    </header>
  )
}

export default Header;
