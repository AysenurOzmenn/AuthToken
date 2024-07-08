import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'

export default function AuthForm({ isLogin }) {

    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')

    function updateInput(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue)
                break;

            case 'password': 
                setEnteredPassword(enteredValue)
                break;

        }
    }

    return (
        <View>
            <Input label="Email" keyboardType="email-address" onUpdateValue={updateInput.bind(this, 'email')} value={enteredEmail} style={styles.input}/>
            <Input label="Şifre" secure onUpdateValue={updateInput.bind(this, 'password')} value={enteredPassword} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 5,
    },
})