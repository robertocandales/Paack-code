import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY } from '../types';
import { Dispatch } from 'redux';
import { IDelivery } from '../../DTOs/deliveriesType';

export const deliveriesActions: any = (data: IDelivery[]) => async (dispatch: any) => {
  try {
    dispatch({
      type: DELIVERIES_LIST,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveriesUpdatedAction: any = (data: IDelivery) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: UPDATE_DELIVERY,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveryRemoveAction: any = (data: IDelivery) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: REMOVE_DELIVERY,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};
