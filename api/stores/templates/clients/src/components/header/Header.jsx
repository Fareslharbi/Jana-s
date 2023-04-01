import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { TbBuildingStore } from 'react-icons/tb';
import { CgLogIn } from 'react-icons/cg';
import './Header.css'
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

const Header = () => {
  const [showStores, setShowStores] = useState(false); // separate state for "Search Stores" button
  const [showCommunity, setShowCommunity] = useState(false); // separate state for "Community" button
  const dict_departments = [
    {id: 1, department: 'New'},
    {id: 2, department: 'Sales & Offers'},
    {id: 3, department: 'Design & Printing'},
    {id: 4, department: 'Fashion & Design'},
    {id: 5, department: 'Electronic Applications'},
    {id: 6, department: 'Educational Services'},
    {id: 7, department: 'Accessories'},
    {id: 8, department: 'Cosmetics & perfumes'},
    {id: 9, department: 'Photography'},
    {id: 10, department: 'Parties and Gifts'},
    {id: 11, department: 'Decoration'},
    {id: 12, department: 'Handicrafts'},
  ]

  const dict_cities = [
    {id: 1, city: 'AlBaha'},
    {id: 2, city: 'Jobil'},
    {id: 3, city: 'Jouf'},
    {id: 4, city: 'Dammam'},
    {id: 5, city: 'Riyadh'},
    {id: 6, city: 'Qassim'},
    {id: 7, city: 'Madina'},
    {id: 8, city: 'Jazan'},
    {id: 9, city: 'Tabuk'},
    {id: 10, city: 'Jeddah'},
    {id: 11, city: 'Hail'},
    {id: 12, city: 'Makkah'},
    {id: 13, city: 'Yanbu'},
    {id: 14, city: 'Khamis Mushait'},
  ]
  // handleCityClick function remains the same
  const handleCityClick = (city) => {
    setShowStores(false);
    setShowCommunity(false);
  };
  function handleClick1() {
    fetch('redirect_home/')
      .then(response => {
        if (response.ok) {
          window.location.href = response.url;
        } else {
          console.error('Failed to redirect');
        }
      })
      .catch(error => console.error(error));
  }
  return (
    <>
      <div className='mother_header_container'>
        <div className='header_container'>
        <h1 onClick={handleClick1}>Jana</h1>
        <div className='searchBar'>
          <input type="text" className="searchBar" name="search" placeholder='What are you looking for?' /><BsSearch className='search_icons'/>
        </div>
        <div className='storeServices' onClick={() => setShowStores(!showStores)}>
          <button>Search Stores</button>
          <TbBuildingStore />
          {showStores && (
            <div className="cities_dropdown">
            <TbArrowBigUpLinesFilled className='arrow'/>
              <h2> Select City</h2>
              <div>{
                dict_cities.map(({id, city}) => {
                  return (
                    <p className="city_option" onClick={() => handleCityClick(city)}>{city}</p>
                  )
                })
              }</div>
            </div>
          )}
        </div>
        <div className='storeServices' onClick={() => setShowCommunity(!showCommunity)}>
          <button>Community</button>
          <TbBuildingStore />
          
          {showCommunity && (
            <div className="cities_dropdown">
            <TbArrowBigUpLinesFilled className='arrow'/>
              <h2> Select City</h2>
              <div>{
                dict_cities.map(({id, city}) => {
                  return (
                    <p id={id} className="city_option" onClick={() => handleCityClick(city)}>{city}</p>
                  )
                })
              }</div>
            </div>
          )}
        </div>
        
        <div className='storeServ'>
          <CgLogIn />
          <h4>SignIn</h4>
        </div>
      </div>
      <div className='subHeader_container'>
        {
          dict_departments.map(({id, department}) => {
            return (
              <h5 id={id}>{department}</h5>
            )
          })
        }
        
      </div>
      </div>
    </>
  )
}

export default Header

