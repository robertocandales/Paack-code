import axios from 'axios';
import { BASE_API } from '../src/API';
import { IDelivery, IDeliveryFinished } from '../src/DTOs/deliveriesType';

const client = axios.create({
  baseURL: `${BASE_API}`,
});

const DeliveryService = {
  getDeliveries: async (): Promise<IDelivery[]> => {
    return client.get(`/deliveries`).then((res) => {
      return res.data;
    });
  },
  finishDelivery: async (data: IDeliveryFinished) => {
    const res = await client.post(`/finishDelivery`, data);
    return res.data;
  },
};

export default DeliveryService;
