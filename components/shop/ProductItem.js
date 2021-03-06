import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors'
const Productitem = props => {
  return (
    <TouchableOpacity onPress={props.onViewDetail} activeOpacity={0.1}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.price}>{props.price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          <Button color={Colors.primary} title="View Details" onPress={props.onViewDetail} />
          <Button color={Colors.primary} title="Add To Cart" onPress={props.onAddToCart} />
        </View>
      </View>
    </TouchableOpacity>


  )
}

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  imageContainer: {
    width: '100%',
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }, image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    height: '15%',
    alignItems: 'center',
    padding: 10
  },
  title: {
    color: 'black',
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: "25%",
    paddingHorizontal: 10
  }

  ,
});

export default Productitem;
