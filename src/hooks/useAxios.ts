import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { base_API } from '../API';

axios.defaults.baseURL = base_API;

const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(
    axiosParams.method === 'GET' || axiosParams.method === 'get',
  );

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const result = await axios.request(params);
      setResponse(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const sendData = () => {
    fetchData(axiosParams);
  };

  useEffect(() => {
    if (axiosParams.method === 'GET' || axiosParams.method === 'get') {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, sendData };
};

export default useAxios;
