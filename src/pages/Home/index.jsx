import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { BasketContext } from '../../Context/BasketContext'
import { WishlistContext } from '../../Context/WishListContext'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const { addToBasket, checkIsBasket } = useContext(BasketContext)

  const { toggleWishList, checkIsWishList } = useContext(WishlistContext)

  const [apiData, setApiData] = useState([])

  const [inp, setInp] = useState("")


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setApiData(data))
  }, [])

  return (
    <section id='homePage'>
      <div className="homePageCont">
        <div className="searchCont">
          <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
        </div>
        <div className="cardCont">
          {apiData.map((x) => {
            if (x.title.toLowerCase().includes(inp.toLowerCase())) {

              return (
                <>
                  <div className="card" key={x.id}>
                    <div className="image"><img src={x.image} alt="" />
                      <div className={checkIsBasket(x) ? `check added` : `check`} ><i class="fa-solid fa-cart-shopping"></i> : <i class="fa-solid fa-check"></i></div>

                    </div>
                    <div className="title">{x.title}</div>
                    <div className="price">${x.price}</div>
                    <div className="category">{x.category}</div>
                    <div className="dropUp">
                      <div className="buttonsCont">

                        {checkIsBasket(x) ? null : <button onClick={() => { addToBasket(x) }}>basket</button>}
                        <div className='wishListButton' onClick={() => toggleWishList(x)}>
                          <i class={checkIsWishList(x) ? "fa-regular fa-heart " : "fa-regular fa-heart visible"}></i>
                          <i class={checkIsWishList(x) ? "fa-solid fa-heart visible" : "fa-solid fa-heart"}></i>
                        </div>
                        <button><Link to={`/details/${x.id}`}>details</Link></button>
                      </div>
                    </div>
                  </div>

                </>
              )
            }

          })}
        </div>
      </div>
    </section >
  )
}

export default HomePage