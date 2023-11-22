import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../constans/colors';


const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');

  function changetTitleHandler(enteredText) {
    setEnteredTitle(enteredText)
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}> Title </Text>
        <TextInput style={styles.input} onChangeText={changetTitleHandler} value={enteredTitle} />
      </View>
    </ScrollView>
  )
}

export default PlaceForm

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});