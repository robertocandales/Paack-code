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
