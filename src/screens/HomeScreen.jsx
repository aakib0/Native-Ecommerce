import React, {useContext, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {CartContext} from '../context/CartContext';
import {products} from '../data/products';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const {addToCart} = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(products.map(p => p.category)),
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const handleProductPress = product => {
    navigation.navigate('ProductDetail', {product});
  };

  const handleAddToCart = product => {
    addToCart(product);
    Alert.alert(
      'Added to Cart!',
      `${product.name} has been added to your cart.`,
      [{text: 'OK'}],
    );
  };

  const renderProduct = ({item}) => (
    <ProductCard
      product={item}
      onPress={() => handleProductPress(item)}
      onAddToCart={handleAddToCart}
    />
  );

  const renderHeader = () => (
    <View style={styles.headerContent}>
      <Text style={styles.greeting}>Discover</Text>
      <Text style={styles.subtitle}>Best products for you</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContent}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(category)}
            activeOpacity={0.7}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header
        title="Shop"
        rightComponent={
          <TouchableOpacity style={styles.searchButton}>
            <Icon name="search-outline" size={22} color="#1a1a1a" />
          </TouchableOpacity>
        }
      />

      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchButton: {
    padding: 8,
  },
  headerContent: {
    paddingTop: 8,
    paddingBottom: 16,
  },
  greeting: {
    fontSize: 32,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  categoriesScroll: {
    marginHorizontal: -16,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
    backgroundColor: '#fff',
    marginRight: 8,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
  },
  categoryChipActive: {
    backgroundColor: '#2E7D32',
    borderColor: '#2E7D32',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  categoryTextActive: {
    color: '#fff',
  },
  listContent: {
    padding: 16,
  },
});

export default HomeScreen;