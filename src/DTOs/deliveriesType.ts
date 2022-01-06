export interface IDelivery {
  address: string;
  city: string;
  zipCode: string;
  latitude: string;
  longitude: string;
  customer: string;
  id: string;
  isActive?: boolean;
}

export interface IDeliveryFinished {
  latitude: string;
  longitude: string;
  deliveryId: string;
  status: string;
}

/****** type to use in redux ****/
interface IdeliveriesActions {
  type: string;
  payload: IDelivery;
}
interface IdeliveriesUpdatedAction {
  type: string;
  payload: IDelivery;
}

interface IdeliveryRemoveActiony {
  type: string;
  payload: IDelivery;
}
export type Action = IdeliveriesActions | IdeliveriesUpdatedAction | IdeliveryRemoveActiony;
