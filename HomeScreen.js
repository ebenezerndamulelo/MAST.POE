import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    course: '',
    price: '',
  });
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const initializeData = async () => {
      const type = await AsyncStorage.getItem('userType');
      const storedMenu = await AsyncStorage.getItem('menuItems');
      setUserType(type);
      setMenuItems(storedMenu ? JSON.parse(storedMenu) : []);
    };

    initializeData();
  }, []);

  const handleAddItem = async () => {
    if (!newItem.name || !newItem.description || !newItem.course || !newItem.price) {
      alert('Please fill out all fields.');
      return;
    }

    const updatedMenu = [...menuItems, { ...newItem, id: Date.now() }];
    setMenuItems(updatedMenu);
    setNewItem({ name: '', description: '', course: '', price: '' });

    await AsyncStorage.setItem('menuItems', JSON.stringify(updatedMenu));
  };

  const handleRemoveItem = async (id) => {
    const updatedMenu = menuItems.filter((item) => item.id !== id);
    setMenuItems(updatedMenu);

    await AsyncStorage.setItem('menuItems', JSON.stringify(updatedMenu));
  };

  return (
    <View style={styles.container}>
      {userType === 'chef' && (
        <View style={styles.addContainer}>
          <Text style={styles.header}>Add Food Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Dish Name"
            value={newItem.name}
            onChangeText={(text) => setNewItem({ ...newItem, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newItem.description}
            onChangeText={(text) =>
              setNewItem({ ...newItem, description: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="Course (e.g., Starter, Main Course, Dessert)"
            value={newItem.course}
            onChangeText={(text) => setNewItem({ ...newItem, course: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Price"
            keyboardType="numeric"
            value={newItem.price}
            onChangeText={(text) => setNewItem({ ...newItem, price: text })}
          />
          <Button title="Add Food" onPress={handleAddItem} />
        </View>
      )}

      <Button
        title="View Food Details"
        onPress={() => navigation.navigate('FoodDetail')}
      />

      <Text style={styles.sectionHeader}>Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>
              {item.name} - ${item.price}
            </Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemCourse}>Course: {item.course}</Text>
            {userType === 'chef' && (
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveItem(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No items in the menu yet.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  addContainer: {
    marginBottom: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  menuItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: 'gray',
  },
  itemCourse: {
    fontSize: 14,
    color: 'blue',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    marginTop: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 16,
  },
});

export default HomeScreen;
