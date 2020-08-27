import React from 'react'
import { FlatList,View,Image,TouchableOpacity} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/shop/ProductItem'
import * as cartActions from '../../store/actions/cart'


const Productsoverview = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList data={products} keyExtractor={item => item.id} renderItem={
      itemData => <ProductItem image={itemData.item.imageUrl} title={itemData.item.title} price={itemData.item.price} onViewDetail={() => {
        props.navigation.navigate("ProductDetails", {
          productId: itemData.item.id,
          productTitle: itemData.item.title,
        })
      }} onAddToCart={() => { dispatch(cartActions.addToCart(itemData.item)) }} />
    } />
  )
}

Productsoverview.navigationOptions =navData=>{
  return {
    headerTitle: 'All Product',
    headerRight: () => (
      <TouchableOpacity onPress={()=>{ navData.navigation.navigate('Cart')}}>
        <View style={{width:50,alignItems:'center'}}>
          <Image style={{width:25,height:25,}} source={require('../../assets/cart.png')}/>
        </View>
      </TouchableOpacity>
    ),  
  }
};

export default Productsoverview
