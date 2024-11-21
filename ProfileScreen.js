// src/screens/ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [profile, setProfile] = useState({ name: '', contact: '', feedback: '' });
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const fetchUserType = async () => {
      const type = await AsyncStorage.getItem('userType');
      setUserType(type);
    };

    fetchUserType();
  }, []);

  if (userType === 'guest') {
    return (
      <View style={styles.container}>
        <Text>Guests cannot edit profile information.</Text>
      </View>
    );
  }

  const handleSave = () => {
    alert('Profile Saved');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact Info"
        value={profile.contact}
        onChangeText={(text) => setProfile({ ...profile, contact: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Feedback"
        value={profile.feedback}
        onChangeText={(text) => setProfile({ ...profile, feedback: text })}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
});

export default ProfileScreen;
