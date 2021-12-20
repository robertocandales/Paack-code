import axios from 'axios';
import React, { useEffect } from 'react';
import {
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  ActivityIndicator,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/stores/hooks';
import { IDelivery } from '../../DTOs/deliveriesType';
import { deliveriesActions } from '../../redux/actions/deliveriesActions';
import { StackNavigationProp } from '@react-navigation/stack';

//styles
import styles from './styles';
import useAxios from '../../hooks/useAxios';

export type IindexProps = {
  navigation: StackNavigationProp<any, any>;
};

const CustomList: React.FC<IindexProps> = ({ navigation }: IindexProps) => {
  const dispatch = useAppDispatch();
  const { deliveries } = useAppSelector((state) => state.deliveries);

  const { response, loading, error } = useAxios({
    method: 'get',
    url: `/deliveries`,
    headers: {
      accept: '*/*',
    },
  });
  useEffect(() => {
    if (response !== null) {
      const listOfDeliveries: IDelivery[] = response?.data.map((item: IDelivery) => ({
        ...item,
        isActive: false,
      }));
      dispatch(deliveriesActions(listOfDeliveries));
    }
  }, [response]);

  const onPress = (value: IDelivery) => {
    navigation.navigate('CustomDetails', { details: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deliveries List</Text>
      {loading ? (
        <ActivityIndicator size='large' />
      ) : (
        <ScrollView style={styles.scrollView}>
          {error && (
            <View>
              <Text>{error.message}</Text>
            </View>
          )}
          {(deliveries || []).map((item: IDelivery) => (
            <View key={item.id}>
              <TouchableOpacity style={styles.button} onPress={() => onPress(item)}>
                {item.isActive ? (
                  <View style={styles.cardCurrent}>
                    <Text style={styles.textSelected}>{item.customer} - Current Delivery</Text>
                  </View>
                ) : (
                  <View style={styles.card}>
                    <Text style={styles.text}>{item.customer}</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export { CustomList };
