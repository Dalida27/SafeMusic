import React from 'react'
import './Search.css'

const Search = ({value, onChange}) => {
  return (
    <div className='search'>
        <input type="text" className='bg-back' placeholder='Поиск...' value={value} onChange={onChange} />
    </div>
  )
}

export default Search