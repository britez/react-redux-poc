import React from 'react'
import './Menu.scss'

export const Menu = () => (
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        <li className="active"><a href="#">Bonificaciones <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Taxes</a></li>
        <li><a href="#">Remedy</a></li>
        <li><a href="#">Payments</a></li>
      </ul>
    </div>
)

export default Menu
