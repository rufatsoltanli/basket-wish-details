import React, { useContext, useEffect, useState } from 'react'
import "./style.scss"
import { BasketContext } from '../../Context/BasketContext'

const HomePage = () => {

  const { addToBasket } = useContext(BasketContext)

  const [apiData, setApiData] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setApiData(data))
  }, [])

  return (
    <section id='homePage'>
      <div className="homePageCont">
        <div className="cardCont">
          {
            apiData.map((x) => {
              return (<div key={x.id} className="card">
                <div className="image"><img src={x.image} alt="" /></div>
                <div className="title">{x.title}</div>
                <div className="price">${x.price}</div>
                <div className="category">{x.category}</div>
                <div className="dropUp">
                  <div className="buttonsCont">
                    <button onClick={() => { addToBasket(x) }}>basket</button>
                    <button>wishlist</button>
                    <button>details</button>
                  </div>
                </div>
              </div>)
            })}
        </div>
      </div>
    </section>
  )
}

export default HomePage