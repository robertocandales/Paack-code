import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import { IDelivery } from '../../../../DTOs/deliveriesType';
import { useAppSelector } from '../../../../redux/stores/hooks';

//styles
import styles from './styles';

interface IProps {
  item: IDelivery;
  onPress: (value: IDelivery) => void;
}

const Item = ({ item, onPress }: IProps) => {
  const { isLoading } = useAppSelector((state) => state.loading);
  return (
    <View>
      <TouchableOpacity disabled={isLoading} style={styles.button} onPress={() => onPress(item)}>
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
  );
};

export default Item;
