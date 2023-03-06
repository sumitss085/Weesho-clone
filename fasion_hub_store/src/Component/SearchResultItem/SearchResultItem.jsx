import React, { useEffect } from 'react'
import "./SearchResultItem.css"
import {Link } from "react-router-dom"
const SearchResultItem = ({result}) => {

  

  return (
    <Link to={`/SingleProduct/${result.id}`}>
      <div className='eachSearchResult'>
        
        <div className='search_image'>
          <img src={result.images[0]} alt="pic" width="40px" />
        </div>

        <div>
          <p>{result.title}</p>
        </div>

      </div>
    </Link>
  )
}

export default SearchResultItem