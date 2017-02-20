
export const showSpecialBonificationModal = (isShow) => {
  return {
    type: 'SHOW_SPECIAL_MODIFICATION_MODAL',
    isShow: !isShow
  }
}

const initialState = {
  isShow: false
}

export default function specialBonificationReducer(state = initialState, action) {
    switch (action.type) {
      case 'SHOW_SPECIAL_MODIFICATION_MODAL':
        return {...state,isShow: action.isShow}
      default:
        return state;
    }
}
