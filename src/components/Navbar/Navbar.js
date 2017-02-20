import React from 'react'
import './Navbar.scss'

export const Navbar = () => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">ABMs</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse"></div>
    </div>
  </nav>
)

export default Navbar
