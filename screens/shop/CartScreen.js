import React from 'react'
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../../constants/Colors';
import CartItem from '../../components/shop/CartItem'
import * as cartActions from '../../store/actions/cart'


const Cartscreen = props => {
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();

  console.log(cartTotalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      }
      );
    }
    return transformedCartItems;
  });
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.summary}>
          <Text style={styles.summaryText}>
            Total:
            <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>

          </Text>
          <Button color={Colors.accent} title="Order Now" />
        </View>
        <FlatList data={cartItems} keyExtractor={items => items.productId} renderItem={itemData => <CartItem quantity={itemData.item.quantity} title={itemData.item.productTitle} amount={itemData.item.sum} onRemove={() => dispatch(cartActions.removeFromCart(itemData.item.productId))} />} />
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: 20
  },
  summary: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    elevation: 8,
    borderRadius: 10,
  },
  summaryText: {
    fontSize: 18,

  },
  amount: {
    color: Colors.accent
  }
});
export default Cartscreen; 
