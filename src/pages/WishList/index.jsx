import React, { useContext } from 'react'
import { WishlistContext } from '../../Context/WishListContext'
import "./style.scss"

function WishList() {
    const { wishList, toggleWishList, checkIsWishList } = useContext(WishlistContext)
    return (
        <section id='wishList'>
            <div className="wishListCont">
                {
                    wishList.map((x) => {
                        return (<div key={x.id} className="card">
                            <div className="image"><img src={x.image} alt="" /></div>
                            <div className="title">{x.title}</div>
                            <div className="dropUp">
                                <div className='wishListButton' onClick={() => toggleWishList(x)}>
                                    <i class={checkIsWishList(x) ? "fa-regular fa-heart " : "fa-regular fa-heart visible"}></i>
                                    <i class={checkIsWishList(x) ? "fa-solid fa-heart visible" : "fa-solid fa-heart"}></i>
                                </div>
                            </div>
                        </div>)
                    })}
            </div>
        </section>
    )
}

export default WishList