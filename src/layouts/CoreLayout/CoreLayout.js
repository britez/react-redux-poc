import React from 'react'
import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div id="layout-container">
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <Menu />
        <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="core-layout__viewport">{children}</div>
        </div>
      </div>
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
