import React from 'react';
import './search.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
    return( 
        <div className=" d-none d-md-flex search-bar-container">
        <span className="search-icon"><i class="bi bi-search"></i></span>
        <input
          type="text"
          className="search-input"
          placeholder="Search for Products, Brands and More"
        />
      </div>
        

    )
}







