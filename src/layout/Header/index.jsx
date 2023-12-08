import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../Context/WishListContext';
import "./style.scss"


function Header() {
  const { basket } = useContext(BasketContext)
  const { wishList } = useContext(WishlistContext)

  return (
    <div id='header'>Header <br />
      <Link to={"/"}>home</Link>

      <div className="basket">
        <Link to={"/basket/"}>basket</Link> <sup>{basket.length}</sup>
      </div>
      <div className="wishList">
        <Link to={"/wishList/"}>Wishlist</Link> <sup>{wishList.length}</sup>
      </div>
    </div>
  )
}

export default Header