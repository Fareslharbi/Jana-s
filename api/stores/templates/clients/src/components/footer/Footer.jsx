import React from 'react'
import './Footer.css'
import {FiTwitter} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
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
  return ( 
    <footer>
      <a href="/#" className='footer__logo'>Jana Comapny</a>
      <ul className='permalinks'>
        {
          dict_departments.map(({id, department}) => {
            return (
              <li><a id={id} href="#about" className='lang_about'>{department}</a></li>
            )
          })
        }
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithub/></a>
        <a href="https://twitter.com/FaresLharbi"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small className='lang_rights'>&copy; Jana Comapny. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
