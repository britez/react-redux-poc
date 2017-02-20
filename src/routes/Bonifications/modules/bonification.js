import 'whatwg-fetch'

export const BONIFICATION_LOAD = 'BONIFICATION_LOAD'
export const TOGGLE_BONIFICATION_MODAL = 'TOGGLE_BONIFICATION_MODAL'
export const CREATE_BONIFICATION = 'CREATE_BONIFICATION'

export const search = (query) => (dispatch) => {

  fetch('/api/charges').then(response => {
    response.json().then(value =>
      dispatch({
        type: BONIFICATION_LOAD,
        bonifications: value.content
      })
    )
  });
}

export const toggleBonificationModal = (isShow, bonification) => ({
  type: TOGGLE_BONIFICATION_MODAL,
  isShow: !isShow,
  bonification
})

export const createBonification = (bonification) => ({
  type: CREATE_BONIFICATION,
  id: bonification.id
})

const bonificationLoad = (state, action) => {
  return action.bonifications;
}

const applyBonificationAction = (bonification, action) => {
  if(bonification.id !== action.id){
    return bonification
  }
  return {...bonification,isBonificated:true};
}

const createBonificationAction = (state, action) => {
  return state.map(bonification => applyBonificationAction(bonification, action));
}

let _ACTIONS = {
  BONIFICATION_LOAD: bonificationLoad,
  CREATE_BONIFICATION: createBonificationAction
}

const initialState = []

export default function bonificationReducer(state = initialState, action) {
  let currentAction = _ACTIONS[action.type]
  return currentAction ? currentAction(state, action) : state;
}

const initialModalState = { isShow: false }

export function bonificationModalReducer(state = initialModalState, action) {
  switch (action.type) {
    case TOGGLE_BONIFICATION_MODAL:
      return {...state, isShow: action.isShow, bonification: action.bonification}
    default:
        return state;
  }
}
