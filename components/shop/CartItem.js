import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const CartItem = (props) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>
        <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton} >
          <Image style={styles.icon} source={require('../../assets/del.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    color: "#888",
    fontSize: 18
  },
  mainText: {
    fontSize: 16
  },

  deleteButton: {
    marginLeft: 20,
  },
  icon:{height:20,width:20}



});

export default CartItem;
