import { connect } from 'react-redux'

import { TOGGLE_BONIFICATION_MODAL, toggleBonificationModal, createBonification } from '../modules/bonification'

import BonificationList from '../components/BonificationListCmp'

const mapStateToTodoListProps = (state) => {
  console.log(state);
  return {
    bonifications: state.bonification,
    isShow: state.bonificationModal.isShow,
    currentBonif: state.bonificationModal.bonification,
    toggleBonificationModal,
    createBonification
  }
};

const mapDispatchToTodoListProps = (dispatch) => {
  return {
    toogleModal: (isShow, bonification) => {
      dispatch(toggleBonificationModal(isShow, bonification));
    },
    applyBonification: (bonification) => {
      dispatch(createBonification(bonification))
    }

  };
};
const BonificationListContainer = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(BonificationList);

export default BonificationListContainer

/*class BonificationListContainer extends ReducContainer {

  constructor() {
      super(BonificationList)
  }


  mapDispatch() {

  }

  mapState() {

  }

}*/
