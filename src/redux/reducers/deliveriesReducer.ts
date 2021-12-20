import { DELIVERIES_LIST, ACTIVE_DELIVERY } from '../types';
import { IDelivery } from '../../DTOs/deliveriesType';
import { Reducer } from 'redux';

interface IinitialState {
  deliveries: IDelivery[];
  activeDelivery: IDelivery;
}
const activeDelivery: IDelivery = {
  address: '',
  city: '',
  zipCode: '',
  latitude: '',
  longitude: '',
  customer: '',
  id: '',
  isActive: false,
};
const initialState: IinitialState = {
  deliveries: [],
  activeDelivery,
};
const deliveriesReducer: Reducer<IinitialState | any, any> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case DELIVERIES_LIST:
      return { ...state, deliveries: action.payload };
    case ACTIVE_DELIVERY:
      return { ...state, activeDelivery: action.payload };

    default:
      return state;
  }
};

export default deliveriesReducer;
