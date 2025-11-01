import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CartContext} from '../context/CartContext';
import Header from '../components/Header';

const ProductDetailScreen = ({route, navigation}) => {
  
  const {product} = route.params;
  const {addToCart} = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <Header
        title="Product Details"
        showBack
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView>
        
        <Image source={{uri: product.image}} style={styles.image} />

        <View style={styles.content}>
         
          <Text style={styles.name}>{product.name}</Text>

          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{product.category}</Text>
          </View>

          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="#FFD700" />
            <Text style={styles.rating}>{product.rating}</Text>
            <Text style={styles.ratingText}>(4.5k reviews)</Text>
          </View>

          <Text style={styles.price}>${product.price.toFixed(2)}</Text>

          <Text style={styles.sectionTitle}>Description</Text>

          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={20} color="#2E7D32" />
            <Text style={styles.featureText}>Fast delivery</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={20} color="#2E7D32" />
            <Text style={styles.featureText}>30-day return policy</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={20} color="#2E7D32" />
            <Text style={styles.featureText}>1-year warranty</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Icon name="cart-outline" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#1976d2',
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
    color: '#000',
  },
  ratingText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  price: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 8,
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: '#2E7D32',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default ProductDetailScreen;