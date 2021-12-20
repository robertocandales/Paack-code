import { DELIVERIES_LIST, ACTIVE_DELIVERY, REMOVE_DELIVERY, UPDATE_DELIVERY } from '../types';
import { ActionCreator, Action, Dispatch, AnyAction } from 'redux';
import { IDelivery } from '../../DTOs/deliveriesType';
import { ThunkAction } from 'redux-thunk';

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

export const deliveryActive: any = (data: IDelivery) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: ACTIVE_DELIVERY,
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
