/* eslint-disable no-unused-expressions */
import reducer from '../getMenu';
import * as actionTypes from '../../../actions/homePageActions/actionTypes';

describe('getMenu Reducers', () => {
  const initialState = {
    isLoading: false,
    response: null,
    error: false
  };

  it('should update isLoading when type.LOAD_MENU_START is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.LOAD_MENU_START,
          isLoading: true
        }
      )
    ).toBeCalled;
  });

  it('should update response when type.LOAD_MENU_SUCCESS is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.LOAD_MENU_SUCCESS,
          isLoading: false,
          payload: 'menu'
        }
      )
    ).toBeCalled;
  });

  it('should update response when type.LOAD_MENU_FAILURE is called ', () => {
    expect(
      reducer(
        {
          ...initialState
        },
        {
          type: actionTypes.LOAD_MENU_FAILURE,
          isLoading: false,
          error: true,
          payload: 'menu'
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
