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
import { getDeliveiesAction } from '../../redux/actions/deliveriesActions';
import { StackNavigationProp } from '@react-navigation/stack';

//styles
import styles from './styles';
import { Theme } from '../../theme/themeProvider';

export type IindexProps = {
  navigation: StackNavigationProp<any, any>;
};

const CustomList: React.FC<IindexProps> = ({ navigation }: IindexProps) => {
  const dispatch = useAppDispatch();
  const { deliveries } = useAppSelector((state) => state.deliveries);
  const { isLoading } = useAppSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getDeliveiesAction);
  }, []);

  const chooseDelivery = (value: IDelivery) => {
    navigation.navigate('CustomDetails', { details: value });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deliveries List</Text>
      {isLoading && (
        <View style={styles.indicator}>
          <ActivityIndicator size='large' color={Theme.colors.notification} />
        </View>
      )}
      <ScrollView style={styles.scrollView}>
        {(deliveries || []).map((item: IDelivery) => (
          <View key={item.id}>
            <TouchableOpacity
              disabled={isLoading}
              style={styles.button}
              onPress={() => chooseDelivery(item)}>
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
    </SafeAreaView>
  );
};

export { CustomList };
