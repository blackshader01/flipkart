import React from 'react';
import './navOptions.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavOptions(props) {
    return(
        <div className=" nav-options d-flex align-items-center justify-content-between ml-5  p-3">
      {/* Login */}
      <div className="d-flex align-items-center ">
        <i className="bi bi-person-circle fs-5"></i>
        <span className="d-none d-md-flex ms-2">Login</span>
        <i className=" d-none d-md-flex bi bi-caret-down-fill ms-1"></i>
      </div>

      {/* Cart */}
      <div className="d-flex align-items-center">
        <i className="bi bi-cart fs-5"></i>
        <span className=" d-none d-md-flex ms-2">Cart</span>
      </div>

      {/* Become a Seller */}
      <div className="d-flex align-items-center">
        <i className="bi bi-shop fs-5"></i>
        <span className=" d-none d-md-flex ms-2">Become a Seller</span>
      </div>

      {/* More Options */}
      <i class="bi bi-three-dots-vertical fs-5"></i>
    </div>
  );
};
       