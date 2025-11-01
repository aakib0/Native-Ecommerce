import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';

const ProfileScreen = () => {
  
  const menuItems = [
    {id: '1', title: 'My Orders', icon: 'receipt-outline'},
    {id: '2', title: 'Addresses', icon: 'location-outline'},
    {id: '3', title: 'Payment Methods', icon: 'card-outline'},
    {id: '4', title: 'Wishlist', icon: 'heart-outline'},
    {id: '5', title: 'Settings', icon: 'settings-outline'},
    {id: '6', title: 'Help & Support', icon: 'help-circle-outline'},
    {id: '7', title: 'About', icon: 'information-circle-outline'},
  ];

  return (
    <View style={styles.container}>
      <Header title="Profile" />

      <ScrollView>
      
        <View style={styles.userSection}>
          <View style={styles.avatar}>
            <Icon name="person" size={50} color="#fff" />
          </View>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john.doe@example.com</Text>
        </View>

        <View style={styles.menuContainer}>
          {menuItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.menuLeft}>
                <Icon name={item.icon} size={24} color="#000" />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Icon name="chevron-forward" size={24} color="#999" />
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.logoutButton}>
          <Icon name="log-out-outline" size={24} color="#ff3b30" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userSection: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoutText: {
    fontSize: 16,
    color: '#ff3b30',
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default ProfileScreen;