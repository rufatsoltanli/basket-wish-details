import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { Link } from 'react-router-dom';



function Header() {
  const { basket } = useContext(BasketContext)
  return (
    <div>Header <br />
      <Link to={"/"}>home</Link>

      <div className="basket">
        <Link to={"/basket/"}>basket</Link> <sup>{basket.length}</sup>
      </div>
      <Link to={"/details/"}>details</Link>
    </div>
  )
}

export default Header