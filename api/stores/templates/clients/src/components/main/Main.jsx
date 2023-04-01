import React from 'react'
import './Main.css'
import ClientCard from './clientCard/ClientCard.jsx'
import Filters from './filters/Filters'

const Main = () => {
  return (
    <div className='main_container'>
      <Filters/>
      <ClientCard/>
    </div>
  )
}

export default Main
