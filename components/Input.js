import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({label,keyboardType,onUpdateValue,value,secure}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
      style={styles.input}
      autoCapitalize='none'
      keyboardType={keyboardType}
      onChangeText={onUpdateValue}
      value={value}
      secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {

    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#985626',
        opacity: 0.3,
    },
   
})