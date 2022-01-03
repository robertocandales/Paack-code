import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY, IS_LOADING } from '../types';
import { Dispatch } from 'redux';
import { IDelivery, IDeliveryFinished } from '../../DTOs/deliveriesType';
import DeliveryService from '../../services/deliveriesServices';

export function isLoadingAction(isLoading: boolean = false) {
  return {
    type: IS_LOADING,
    payload: isLoading,
  };
}

export const getDeliveiesAction: any = async (dispatch: any) => {
  try {
    dispatch(isLoadingAction(true));
    const res = await DeliveryService.getDeliveries();
    dispatch(deliveriesActions(res));
    dispatch(isLoadingAction(false));
  } catch (error) {
    console.log('error');
  }
};

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

export const deliveryPostRemoveAction: any =
  (value: IDeliveryFinished) => async (dispatch: any) => {
    try {
      dispatch(isLoadingAction(true));
      const res = await DeliveryService.finishDelivery(value);
      dispatch(deliveryRemoveAction(res));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log('error');
    }
  };
