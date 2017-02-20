import { connect } from 'react-redux'
import { setVisibilityFilter } from '../modules/visibleTodoList'

import Link from '../components/Link'

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => ({
  onClick: () => {
   dispatch(setVisibilityFilter(ownProps.filter));
  }
})

let FilterLinkContainer = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

export default FilterLinkContainer
