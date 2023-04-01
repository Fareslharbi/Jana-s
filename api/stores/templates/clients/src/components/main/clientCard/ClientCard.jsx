import React from 'react'

import './ClientCard.css'
import clientCard from '../../../assists/clientCard.png'
import clientCard1 from '../../../assists/clientCard1.png'
import clientCard2 from '../../../assists/clientCard2.png'
// import clientCard3 from '../../../assists/clientCard3.png'
import clientCard4 from '../../../assists/clientCard4.png'


const ClientCard = () => {
  const dict_client = [
    {
      id: 1, 
      title: 'Munira Marzouq Shafi Al-Majed',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard,
      instagram: 'venus_mh'
    },
    {
      id: 2, 
      title: 'Anwar Fahid travel Al-Qahtani',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard1,
      instagram: 'venus_mh'
    },
    {
      id: 3, 
      title: 'Rahaf Hamad Salem Al-Dosari',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard2,
      instagram: 'venus_mh'
    },
    {
      id: 4, 
      title: 'Nouf Ali Al-Shamrani',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard1,
      instagram: 'venus_mh'
    },
    {
      id: 5, 
      title: 'Amal Hizam al-Maliki',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard4,
      instagram: 'venus_mh'
    },
    {
      id: 6, 
      title: 'Amal Hizam al-Maliki',
      desc: 'Fasion design',
      phoneNum: '0583313380',
      img: clientCard4,
      instagram: 'venus_mh'
    },
  ]
  function handleClick1() {
    fetch('redirect_shops/')
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
    <div className='client_card_container'>
      <h1>Stores In Dammam</h1>
      <div className='banner_container'>
      {
        dict_client.map(({id, title, desc, phoneNum, img, instagram}) => {
          return (
            <div onClick={handleClick1} id={id} className='small_card'>
              <label>{title}</label>
              <img src={img} alt="card_img"/>
              <h2>{desc}</h2>
              <p>{phoneNum}</p>
              <a href='www.google.com'>{instagram}</a>
            </div>  
          )
        })
      }
    </div>
  </div>
  )
}
export default ClientCard
