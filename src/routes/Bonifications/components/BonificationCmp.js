import React from 'react'
import './bonifications.scss'

import SearchComponent from './../containers/SearchCnt'
import ActionsContainer from '../containers/actionsContainer'
import BonificationListContainer from '../containers/bonificationListContainer'

export const Bonification = (props) => (
  <div id='bonifications'>
    <SearchComponent />
    <ActionsContainer />
    <BonificationListContainer />
  </div>
)

export default Bonification
