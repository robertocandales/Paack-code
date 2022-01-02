import { IS_LOADING } from '../types';
import { Reducer } from 'redux';

interface IInitialState {
  isLoading: boolean;
}

const initialState: IInitialState = {
  isLoading: false,
};

const isLoadingReducer: Reducer<{} | any, any> = (state = initialState, action: any) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default isLoadingReducer;
