import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = ({title}) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useNavigation();
  const shouldGoBack = title === 'Tweet';

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: 'red',
        paddingTop: top,
        paddingBottom: 16,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>{shouldGoBack ? <Text onPress={goBack}>Go Back</Text> : null}</View>
      <Text>{title}</Text>
      <View></View>
    </View>
  );
};

export default Header