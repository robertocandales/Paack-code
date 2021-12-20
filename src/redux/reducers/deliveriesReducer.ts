import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY } from '../types';
import { IDelivery } from '../../DTOs/deliveriesType';
import { Reducer } from 'redux';

interface IinitialState {
  deliveries: IDelivery[];
}

const initialState: IinitialState = {
  deliveries: [],
};
const deliveriesReducer: Reducer<IinitialState | any, any> = (
  state = initialState,
  action: any,
) => {
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
        deliveries: state.deliveries.filter(
          (value: IDelivery) => value.id !== action.payload.deliveryId,
        ),
      };
    default:
      return state;
  }
};

export default deliveriesReducer;
