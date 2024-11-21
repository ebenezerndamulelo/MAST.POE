import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView,Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodDetailScreen = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const storedMenu = await AsyncStorage.getItem('menuItems');
      setMenuItems(storedMenu ? JSON.parse(storedMenu) : []);
    };

    fetchMenu();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Main Meal</Text>
        <Text style={styles.itemTitle}>Herb-Crusted Rack of Lamb......R420</Text>
        <Text style={styles.itemDescription}>
          a tender and juicy rack of lamb, expertly seasoned with a blend of fresh herbs, garlic, and Dijon mustard.
        </Text>

        <Text style={styles.itemTitle}>Spicy Thai Basil Chicken (Pad Krapow Gai)......R390</Text>
        <Text style={styles.itemDescription}>
          a beloved Thai street food dish that packs a punch! This dish features tender pieces of chicken stir-fried with a medley of fresh vegetables, including bell peppers and onions, all infused with aromatic garlic and fiery Thai bird chilies.
        </Text>

        <Text style={styles.itemTitle}>Mushroom Risotto......R270</Text>
        <Text style={styles.itemDescription}>
          Infused with earthy sautéed mushrooms—such as cremini, shiitake, and porcini—this risotto is further enhanced by the rich umami flavors of garlic and fresh thyme.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Starter</Text>
        
        <Text style={styles.itemTitle}>Caprese Salad Skewers........R90</Text>
        <Text style={styles.itemDescription}>
          Drizzled with a balsamic glaze and a sprinkle of sea salt, each bite bursts with flavor—a perfect balance of tangy, creamy, and herbaceous notes.
        </Text>

        <Text style={styles.itemTitle}>Stuffed Mushrooms.......R85</Text>
        <Text style={styles.itemDescription}>Served with grilled bacon on the side.</Text>

        <Text style={styles.itemTitle}>Spicy Tuna Tartare......R150</Text>
        <Text style={styles.itemDescription}>
          Accompanied by crispy wonton chips, it’s the perfect appetizer to whet the appetite and set the tone for an exquisite dining experience.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Desserts</Text>
        
        <Text style={styles.itemTitle}>Chocolate Lava Cake........R30</Text>
        <Text style={styles.itemTitle}>Classic Tiramisu........R36</Text>
        <Text style={styles.itemTitle}>Peppermint Crisp Tart........R42</Text>
        <Text style={styles.itemTitle}>Mango Sticky Rice........R25</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: '#f3ae42',
    padding: 20,
    borderRadius: 10,
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 16,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDetailScreen;
