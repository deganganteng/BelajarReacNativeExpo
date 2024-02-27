
import { useState } from `react`;
import { ScrollView, StyleSheet, Text, TouchlableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.body}>
      <Scrollview>
        {/* Shift + alt + arrow down*/}
        <text>P Balap!!!!!</text>
        <TouchlableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acc</Text>
        </TouchlableOpacity>
      <ScrollView>
    </View>
  )
}

// Stop Server: Ctrl + c
const styles = StyleSheet.create({
  body: {
    width: `100%`
  },
  button: {
    width: `fit-content`,
    backgroundcolor: `blue`,
    paddingleft: `20px`,
    paddingright: `20px`,
    paddingtop:  `5px`,
    paddingbottom: `5px`,
    borderRadius: `5px`
  },
  buttonText: {
    color: `white`
  }  


});