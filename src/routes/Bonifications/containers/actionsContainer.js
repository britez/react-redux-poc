import { connect } from 'react-redux'
import { showSpecialBonificationModal } from '../modules/specialBonification'

import ActionsComponent from '../components/Actions'

const mapStateToTodoListProps = (state, ownProps) => {
  console.log(state.specialBonification.isShow)
  return {
    isShow: state.specialBonification.isShow
  }
};

const mapDispatchToTodoListProps = (
  dispatch
) => {
  return {
    onClick: (isShow) => {
      dispatch(showSpecialBonificationModal(isShow));
    }
  };
};

const ActionsContainer = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(ActionsComponent);

export default ActionsContainer
