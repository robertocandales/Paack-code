import axios from 'axios';
import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/stores/hooks';
import { base_API } from '../../API';
import CustomButton from '../../components/CustomButton';
import { IDelivery } from '../../DTOs/deliveriesType';
import { deliveriesActions, deliveryActive } from '../../redux/actions/deliveriesActions';
import Icon from 'react-native-vector-icons/FontAwesome';

//styles
import styles from './styles';

interface IProps {
  route: any;
  navigation: any;
}

const CustomDetails: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const dispatch = useAppDispatch();
  const { deliveries } = useAppSelector((state) => state.deliveries);
  const { details } = route.params;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onPress = (value: IDelivery) => {
    const deliverActivated: IDelivery = { ...value, isActive: true };
    const deliveriesArrayUpdated: IDelivery[] = deliveries.map((item: IDelivery) => {
      if (item.id === value.id) {
        return deliverActivated;
      }
      return item;
    });
    dispatch(deliveryActive(deliverActivated));
    dispatch(deliveriesActions(deliveriesArrayUpdated));
  };

  const finishDelivery = async (info: IDelivery, value: string) => {
    setIsLoading(true);
    const data = {
      deliveryId: info.id,
      status: value,
      latitude: info.latitude,
      longitude: info.longitude,
    };
    const res = await axios.post(`${base_API}/finishDelivery/`, data);
    console.log(res, 'res');
    if (res.data) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
      Alert.alert('error');
    }
  };

  const deliveryDetails = deliveries.find((item: IDelivery) => item.id === details.id);
  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size='large' style={styles.indicator} />}
      <TouchableOpacity onPress={navigation.goBack} style={styles.row}>
        <Icon name='arrow-left' size={18} />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Details</Text>
      <View style={styles.card}>
        <Text style={styles.text}>Name: {deliveryDetails.customer}</Text>
        <Text style={styles.text}>Address: {deliveryDetails.address}</Text>
        <Text style={styles.text}>City: {deliveryDetails.city}</Text>
        <Text style={styles.text}>Zip Code{deliveryDetails.zipCode}</Text>
        <Text style={styles.text}>Latitude: {deliveryDetails.latitude}</Text>
        <Text style={styles.text}>Longitude:{deliveryDetails.longitude}</Text>
        {!deliveryDetails.isActive && (
          <View style={styles.active}>
            <CustomButton
              icon={'plus'}
              label='Make active'
              onPress={() => onPress(deliveryDetails)}
              disabled={deliveries.some((value: IDelivery) => value.isActive === true)}
            />

            {deliveries.some((value: IDelivery) => value.isActive === true) && (
              <Text style={styles.textNotification}>
                You have another delivery in progress, you must finish the current delivery to start
                the next
              </Text>
            )}
          </View>
        )}

        {deliveryDetails?.isActive && (
          <View style={styles.activeWrapperButtons}>
            <CustomButton
              icon={'truck'}
              label='Delivered'
              disabled={isLoading}
              onPress={() => finishDelivery(deliveryDetails, 'delivered')}
            />
            <CustomButton
              icon={'weixin'}
              label='Undelivered'
              disabled={isLoading}
              onPress={() => finishDelivery(deliveryDetails, 'undelivered')}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomDetails;
