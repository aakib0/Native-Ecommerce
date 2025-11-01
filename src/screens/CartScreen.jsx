import React, {useContext} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {CartContext} from '../context/CartContext';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';


const CartScreen = () => {
  
  const {cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart} =
    useContext(CartContext);


  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Please add items to cart first');
      return;
    }

    Alert.alert(
      'Order Placed',
      `Total: $${getCartTotal().toFixed(2)}\nThank you for your order!`,
      [
        {
          text: 'OK',
          onPress: () => clearCart(),
        },
      ],
    );
  };

  
  const renderCartItem = ({item}) => (
    <CartItem
      item={item}
      onUpdateQuantity={updateQuantity}
      onRemove={removeFromCart}
    />
  );

  
  if (cartItems.length === 0) {
    return (
      <View style={styles.container}>
        <Header title="Cart" />
        <View style={styles.emptyContainer}>
          <Icon name="cart-outline" size={80} color="#ccc" />
          <Text style={styles.emptyText}>Your cart is empty</Text>
          <Text style={styles.emptySubtext}>
            Add items to get started
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Cart" />

     
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />

     
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>
            ${getCartTotal().toFixed(2)}
          </Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
          <Icon name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  footer: {
    backgroundColor: '#fff',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2E7D32',
  },
  checkoutButton: {
    flexDirection: 'row',
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
});

export default CartScreen;