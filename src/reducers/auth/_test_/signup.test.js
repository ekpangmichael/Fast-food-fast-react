/* eslint-disable no-unused-expressions */
import reducer from '../signupReducer';
import * as actionTypes from '../../../actions/authActions/actionTypes';

describe('Signin Reducers', () => {
  const initialState = {
    isLoading: false,
    response: null,
    error: false,
    class: null
  };

  it('should update isLoading when type.SIGNUP_USER_START ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNUP_USER_START,
          isLoading: true
        }
      )
    ).toBeCalled;
  });

  it('should updated response when signup success is called', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNUP_USER_SUCCESS,
          isLoading: false,
          class: 'success',
          payload: [{}, { message: true }]
        }
      )
    ).toBeCalled;
  });

  it('should updated response when signup fail is called', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNUP_USER_FAILURE,
          error: true,
          class: 'fail',
          payload: {
            response: {
              data: [null, { message: 'fail' }]
            }
          }
        }
      )
    ).toBeCalled;
  });

  it('should default to initial state when no actionType is supply', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.FAKE_TYPE
        }
      )
    ).toBeCalled;
  });
});
