import React from 'react'
import FlipkartLogo from '../../assets-src/flipkart-logo'
import './Header.css'
import Search from '../../assets-src/search'
import NavOptions from '../../assets-src/nav-options/navOptions'
function Header() {
  return (
    <div className='headerParent'>
        <div className='headerChild'>
            <div className="headerLogo">
                <FlipkartLogo ></FlipkartLogo>
               
            </div>
            <div className="searchBar">
            <Search></Search>
            </div>
            <div className="navOptions">
              <NavOptions></NavOptions>
            </div>

        </div>


      
    </div>
  )
}

export default Header
