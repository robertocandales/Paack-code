import React, { useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '../../redux/stores/hooks';
import { IDelivery } from '../../DTOs/deliveriesType';
import { getDeliveiesAction } from '../../redux/actions/deliveriesActions';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

//styles
import styles from './styles';
import { Theme } from '../../theme/themeProvider';
import Item from './components/Item';

export type IindexProps = {
  navigation: NavigationProp<ParamListBase>;
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

  const renderItem = ({ item }: ListRenderItemInfo<IDelivery>) => {
    return <Item key={item.id} item={item} onPress={chooseDelivery} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Deliveries List</Text>
      {isLoading && (
        <View style={styles.indicator}>
          <ActivityIndicator size='large' color={Theme.colors.notification} />
        </View>
      )}

      <FlatList data={deliveries} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </SafeAreaView>
  );
};

export { CustomList };
