import * as actionTypes from '../../actions/authActions/actionTypes';

const initialState = {
  isLoading: false,
  response: null,
  error: false,
  class: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGNIN_USER_START:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.SIGNIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        class: 'success',
        response: action.payload[0].status
      };
    case actionTypes.SIGNIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        response: action.payload.response.data[1].message,
        error: true,
        class: 'fail'
      };
    default:
      return state;
  }
};

export default reducer;
