import React, { useContext } from 'react'
import { BasketContext } from '../../Context/BasketContext'

function BasketPage() {
    const { basket, countInc, countDec, removeFromBasket } = useContext(BasketContext)

    return (
        <section id='basketPage'>
            <div className="basketCont">
                {
                    basket.map((x) => {
                        return (<div key={x.id} className="card">
                            <div className="image"><img src={x.image} alt="" /></div>
                            <div className="title">{x.title}</div>
                            <div className="price">${x.price*x.count}</div>
                            <div className="dropUp">
                                <div className="buttonsCont">
                                    <button onClick={() => { removeFromBasket(x) }}>removeFromBasket</button>
                                    <div className="counCont">
                                        Item count : {x.count}
                                        <button onClick={() => { countInc(x) }}>+</button>
                                        <button onClick={() => { countDec(x) }}>-</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
            </div>
        </section>
    )
}

export default BasketPage