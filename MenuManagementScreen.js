import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MenuManagementScreen = () => {
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      const type = await AsyncStorage.getItem('userType');
      setUserType(type);
    };

    fetchUserType();
  }, []);

  if (userType !== 'chef') {
    return (
      <View style={styles.container}>
        <Text>You do not have access to manage the menu.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Menu Management (Accessible only to the Chef)</Text>
      {/* Add/Edit/Delete functionality goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MenuManagementScreen;
