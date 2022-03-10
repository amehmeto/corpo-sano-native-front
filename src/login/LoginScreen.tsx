import { Text, View } from 'native-base'
import React from 'react'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text alignContent={'logo'}>LOGO</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"/>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.twoFactorText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputView: {
    backgroundColor: '#fff',
    height: 50,
    width: '80%',
    marginTop: 20,
  },

  textInput: {
    height: 50,
    padding: 10,
  },

  twoFactorText: {
    height: 30,
    marginTop: 5,
  },

  loginButton: {
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: 'gray',
  },
})