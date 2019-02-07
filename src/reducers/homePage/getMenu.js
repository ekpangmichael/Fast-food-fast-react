import * as actionTypes from '../../actions/homePageActions/actionTypes';

const initialState = {
  isLoading: false,
  response: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_MENU_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.LOAD_MENU_SUCCESS:
      return {
        ...state,
        isLoading: false,
        response: action.payload
      };
    case actionTypes.LOAD_MENU_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: action.payload,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
