import React, {useContext} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {CartContext} from '../context/CartContext';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';


const HomeScreen = ({navigation}) => {
 
  const {addToCart} = useContext(CartContext);

  
  const handleProductPress = product => {
    
    navigation.navigate('ProductDetail', {product});
  };

  const handleAddToCart = product => {
    addToCart(product);
  };


  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onPress={() => handleProductPress(item)}
      onAddToCart={handleAddToCart}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Shop" />

      
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
});

export default HomeScreen;