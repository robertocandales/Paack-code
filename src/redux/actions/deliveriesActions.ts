import { DELIVERIES_LIST, REMOVE_DELIVERY, UPDATE_DELIVERY, IS_LOADING } from '../types';
import { IDelivery, IDeliveryFinished, Action } from '../../DTOs/deliveriesType';
import DeliveryService from '../../services/deliveriesServices';
import { Dispatch } from 'redux';

export function isLoadingAction(isLoading = false) {
  return {
    type: IS_LOADING,
    payload: isLoading,
  };
}

export const getDeliveiesAction = async (dispatch: Dispatch<any>) => {
  try {
    dispatch(isLoadingAction(true));
    const res: IDelivery = await DeliveryService.getDeliveries();
    dispatch(deliveriesActions(res));
    dispatch(isLoadingAction(false));
  } catch (error) {
    console.log('error');
  }
};

export const deliveriesActions = (data: IDelivery) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: DELIVERIES_LIST,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveriesUpdatedAction = (data: IDelivery) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: UPDATE_DELIVERY,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveryRemoveActiony = (data: IDelivery) => async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: REMOVE_DELIVERY,
      payload: data,
    });
  } catch (error) {
    console.log('error');
  }
};

export const deliveryPostRemoveAction =
  (value: IDeliveryFinished) => async (dispatch: Dispatch<any>) => {
    try {
      dispatch(isLoadingAction(true));
      const res = await DeliveryService.finishDelivery(value);
      const resFormated: IDelivery = {
        address: '',
        city: '',
        zipCode: '',
        latitude: '',
        longitude: '',
        customer: '',
        id: res.deliveryId,
        isActive: false,
      };
      dispatch(deliveryRemoveActiony(resFormated));
      dispatch(isLoadingAction(false));
    } catch (error) {
      console.log('error');
    }
  };
