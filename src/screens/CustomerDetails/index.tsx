import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/stores/hooks';
import CustomButton from '../../components/CustomButton';
import {
  deliveriesUpdatedAction,
  deliveryPostRemoveAction,
} from '../../redux/actions/deliveriesActions';
import Icon from 'react-native-vector-icons/FontAwesome';

//types
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { IDelivery, IDeliveryFinished } from '../../DTOs/deliveriesType';

//styles
import styles from './styles';

interface IProps {
  route: RouteProp<any, any> | any;
  navigation: NavigationProp<ParamListBase>;
}

const CustomDetails: React.FC<IProps> = ({ route, navigation }: IProps) => {
  const dispatch = useAppDispatch();
  const { deliveries = [] } = useAppSelector((state) => state.deliveries);
  const { isLoading } = useAppSelector((state) => state.loading);

  const { details } = route.params;

  const onPress = (value: IDelivery) => {
    dispatch(deliveriesUpdatedAction(value));
  };

  const finishDelivery = async (info: IDelivery, value: string) => {
    const data: IDeliveryFinished = {
      deliveryId: info.id,
      status: value,
      latitude: info.latitude,
      longitude: info.longitude,
    };
    dispatch(deliveryPostRemoveAction(data));
    navigation.navigate('DeliveriesList');
  };

  const deliveryDetails: IDelivery = deliveries.find(
    (item: IDelivery) => item.id === details.id,
  ) ?? {
    customer: '',
    address: '',
    city: '',
    zipCode: '',
    latitude: '',
    longitude: '',
    isActive: false,
    id: '',
  };
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' style={styles.indicator} />
      ) : (
        <>
          <TouchableOpacity onPress={navigation.goBack} style={styles.row}>
            <Icon name='arrow-left' size={18} />
            <Text style={styles.text}>Back</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Details</Text>
          <View style={styles.card}>
            <Text style={styles.text}>Name: {deliveryDetails?.customer}</Text>
            <Text style={styles.text}>Address: {deliveryDetails?.address}</Text>
            <Text style={styles.text}>City: {deliveryDetails?.city}</Text>
            <Text style={styles.text}>Zip Code{deliveryDetails?.zipCode}</Text>
            <Text style={styles.text}>Latitude: {deliveryDetails?.latitude}</Text>
            <Text style={styles.text}>Longitude:{deliveryDetails?.longitude}</Text>
            {!deliveryDetails?.isActive && (
              <View style={styles.active}>
                <CustomButton
                  icon={'plus'}
                  label='Make active'
                  onPress={() => onPress(deliveryDetails)}
                  disabled={deliveries.some((value: IDelivery) => value.isActive === true)}
                />

                {deliveries.some((value: IDelivery) => value.isActive === true) && (
                  <Text style={styles.textNotification}>
                    You have another delivery in progress, you must finish the current delivery to
                    start the next
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
        </>
      )}
    </View>
  );
};

export default CustomDetails;
