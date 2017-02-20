import React from 'react'
import './bonifications.scss'

import SearchComponent from './Search'
import ActionsContainer from '../containers/ActionsContainer'
import BonificationListContainer from '../containers/BonificationListContainer'

export const Bonification = (props) => (
  <div id='bonifications'>
    <SearchComponent />
    <ActionsContainer />
    <BonificationListContainer />
  </div>
)

export default Bonification
