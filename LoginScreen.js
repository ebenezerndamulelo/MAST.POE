import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (username === 'chef' && password === 'password') {
      await AsyncStorage.setItem('userType', 'chef');
      navigation.navigate('Home');
    } else {
      alert('Invalid login details');
    }
  };

  const handleGuestLogin = async () => {
    await AsyncStorage.setItem('userType', 'guest');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Welcome Message */}
      <Text style={styles.welcomeMessage}>
        Welcome to Christoffel's Culinary Companion
      </Text>

      {/* Logo Image */}
      <Image 
        source={require('../assets/my-logo.png')} // Correct path to your logo image
        style={styles.logo} 
      />

      {/* Login Form */}
      <Text style={styles.header}>Login</Text> 
      <TextInput
        style={styles.input}
        placeholder="Username"   // username is chef
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"  //password is password
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.orText}>OR</Text>
      <Button title="Continue as Guest" onPress={handleGuestLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  welcomeMessage: {
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20, // Space between the welcome message and the logo
    color: '#333', // Optional: Set a color for the text
  },
  header: {
    fontSize: 20,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  logo: {
    width: 300, // Set the width of the logo
    height: 300, // Set the height of the logo
    marginBottom: 30, // Space between the logo and the login form
    alignSelf: 'center', // Centers the logo horizontally
  },
});

export default LoginScreen;
