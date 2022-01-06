import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY } from '../types';
import { Action, IDelivery } from '../../DTOs/deliveriesType';

interface IinitialState {
  deliveries: IDelivery[];
}

const initialState: IinitialState = {
  deliveries: [],
};
const deliveriesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case DELIVERIES_LIST:
      return { ...state, deliveries: action.payload };

    case UPDATE_DELIVERY:
      return {
        ...state,
        deliveries: state.deliveries.map((value: IDelivery) => {
          if (value.id === action.payload.id) {
            return { ...value, isActive: true };
          }
          return value;
        }),
      };
    case REMOVE_DELIVERY:
      return {
        ...state,
        deliveries: state.deliveries.filter((value: IDelivery) => value.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default deliveriesReducer;
