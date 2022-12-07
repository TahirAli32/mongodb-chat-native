import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

  const navigation = useNavigation()

  const handleTouch = () => {
    navigation.replace("Login")
  }

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleTouch} style={styles.button}>
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    backgroundColor: '#0782F9',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
      color: '#fff',
      fontWeight: '700',
      fontSize: 16,
  },
})