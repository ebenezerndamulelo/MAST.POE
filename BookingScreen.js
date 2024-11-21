import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookingScreen = () => {
  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    setDate(selectedDate || date);
  };

  const handleBooking = () => {
    alert('Booking Confirmed');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Date and Time:</Text>
      <Button title="Pick Date and Time" onPress={() => setShowPicker(true)} />
      {showPicker && <DateTimePicker value={date} mode="datetime" onChange={onDateChange} />}

      <Text style={styles.label}>Number of Guests:</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={guests} onChangeText={setGuests} placeholder="Guests" />

      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
  },
});

export default BookingScreen;