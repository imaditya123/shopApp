import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import Colors from '../../constants/Colors'
import Icon from 'react-native-vector-icons/Ionicons';

const MaterialHeaderButton = (props) => (
  <HeaderButton IconComponent={MaterialIcons} iconSize={23} color="blue" {...props} />
);

export const MaterialHeaderButtons = (props) => {
  return <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props} />;
};
export { Item } from 'react-navigation-header-buttons';

