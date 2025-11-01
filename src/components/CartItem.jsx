import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const CartItem = ({item, onUpdateQuantity, onRemove}) => {
  return (
    <View style={styles.container}>
    
      <Image source={{uri: item.image}} style={styles.image} />

     
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>

       
        <View style={styles.quantityContainer}>
       
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onUpdateQuantity(item.id, item.quantity - 1)}>
            <Icon name="remove" size={20} color="#000" />
          </TouchableOpacity>

          
          <Text style={styles.quantity}>{item.quantity}</Text>

         
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => onUpdateQuantity(item.id, item.quantity + 1)}>
            <Icon name="add" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemove(item.id)}>
        <Icon name="trash-outline" size={24} color="#ff3b30" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
    color: '#000',
  },
  removeButton: {
    padding: 8,
  },
});

export default CartItem;