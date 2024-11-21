// src/screens/ClientViewScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ClientViewScreen = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Starter 1', course: 'Starter' },
    { id: 2, name: 'Main 1', course: 'Main' },
    { id: 3, name: 'Dessert 1', course: 'Dessert' },
  ]);
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const [selectedCourse, setSelectedCourse] = useState('All');

  const filterMenu = (course) => {
    if (course === 'All') {
      setFilteredItems(menuItems);
    } else {
      setFilteredItems(menuItems.filter(item => item.course === course));
    }
    setSelectedCourse(course);
  };

  return (
    <View style={styles.container}>
      <Text>Filter by Course</Text>
      <View style={styles.buttonGroup}>
        <Button title="All" onPress={() => filterMenu('All')} />
        <Button title="Starters" onPress={() => filterMenu('Starter')} />
        <Button title="Mains" onPress={() => filterMenu('Main')} />
        <Button title="Desserts" onPress={() => filterMenu('Dessert')} />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  menuItem: {
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});

export default ClientViewScreen;