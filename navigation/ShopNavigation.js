import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'

import ProductOverview from '../screens/shop/ProductsOverview';
import ProductDetailScreen from '../screens/shop/Productdetailscreen';
import CartScreen from '../screens/shop/CartScreen';
import Colors from '../constants/Colors'



const ProductNavigator = createStackNavigator({
  ProductsOverView: ProductOverview,
  ProductDetails: ProductDetailScreen,
  Cart: CartScreen,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
  }
});

export default createAppContainer(ProductNavigator);

