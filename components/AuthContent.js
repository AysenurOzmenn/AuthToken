import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import ButtonWhite from './ButtonWhite';

export default function AuthContent({isLogin}) {
  return (
    <View style={styles.container}>
       <AuthForm isLogin={isLogin}/>
       <View>
        <ButtonWhite>
            {isLogin ? 'Yeni Kullanıcı Oluştur' : 'Giriş Yap'};
        </ButtonWhite>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: '#985626',
        marginTop: 50,
        marginHorizontal:30,
        borderRadius: 30,
        elevation: 4,
        shadowColor:'black',
        shadowOffset: {width:1, height:2},
        shadowOpacity : 0.5,
        shadowRadius: 4,
    },
})