import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const Header = ({title, showBack, onBackPress, rightComponent}) => {
  return (
    <View style={styles.header}>
      {/* Left side Back button  */}
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
        )}
      </View>

     
      <Text style={styles.title}>{title}</Text>

      
      <View style={styles.rightContainer}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  leftContainer: {
    width: 40,
  },
  rightContainer: {
    width: 40,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Header;