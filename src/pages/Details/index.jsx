import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./style.scss"

function DetailsPage() {
  const [apiData, setApiData] = useState([])

  const { id } = useParams()


  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json())
      .then(data => setApiData(data))
  }, [])


  return (
    <section id='detailsPage'>
      <div className="detailsPageCont">
       <div className="card">
        <div className="img"><img src={apiData.image} alt="" /></div>
        <div className="title">{apiData.title}</div>
        <div className="price">{apiData.price}</div>
       </div>
      </div>
    </section>
  )
}

export default DetailsPage