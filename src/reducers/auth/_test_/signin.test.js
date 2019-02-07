/* eslint-disable no-unused-expressions */
import reducer from '../signinReducers';
import * as actionTypes from '../../../actions/authActions/actionTypes';

describe('Signin Reducers', () => {
  const initialState = {
    isLoading: false,
    response: null,
    error: false,
    class: null
  };

  it('should update response  when  sigin success is called', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNIN_USER_SUCCESS,
          isLoading: false,
          class: 'success',
          payload: [{ status: true }]
        }
      )
    ).toBeCalled;
  });

  it('should updated response when signin fail is called', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNIN_USER_FAILURE,
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

  it('should update isLoading when  signin start is called', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.SIGNIN_USER_START,
          isLoading: true
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
