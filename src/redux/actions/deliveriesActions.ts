import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY, IS_LOADING } from '../types';
import { IDelivery, IDeliveryFinished } from '../../DTOs/deliveriesType';
import DeliveryService from '../../services/deliveriesServices';
import { Dispatch } from 'redux';

export function isLoadingAction(isLoading = false) {
  return {
    type: IS_LOADING,
    payload: isLoading,
  };
}

export const getDeliveiesAction: any = async (dispatch: Dispatch<any>) => {
  try {
    dispatch(isLoadingAction(true));
    const res = await DeliveryService.getDeliveries();
    dispatch(deliveriesActions(res));
    dispatch(isLoadingAction(false));
  } catch (error) {
    console.log('error');
  }
};

export const deliveriesActions: any = (data: IDelivery[]) => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: DELIVERIES_LIST,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveriesUpdatedAction: any =
  (data: IDelivery) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch({
        type: UPDATE_DELIVERY,
        payload: data,
      });
    } catch (error) {
      console.log('error');
    }
  };

export const deliveryRemoveActiony: any = (data: IDelivery) => async (dispatch: Dispatch<any>) => {
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
  (value: IDeliveryFinished) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(isLoadingAction(true));
      const res = await DeliveryService.finishDelivery(value);
      dispatch(deliveryRemoveActiony(res));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log('error');
    }
  };
