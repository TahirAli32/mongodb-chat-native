import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, ToastAndroid } from 'react-native';

export default function App() {

  const [email, setEmail] = useState('')
  
  const handleChange = (text) => {
    setEmail(text)
  }

  const handlePress = () => {
    ToastAndroid.showWithGravityAndOffset(
      email,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    )
  }

  return (
    <View style={styles.container}>
      <Text onPress={handlePress} style={styles.mainHeading}>Login Now</Text>
      <View style={styles.InputView}>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Email"
          onChangeText={handleChange}
        />
        <Button title='Send' onPress={handlePress}/>
      </View>
      <View>
        {email && <Text>{email}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
    justifyItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    backgroundColor: '#b6f0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainHeading: {
    fontSize: 25,
    marginBottom: 15,
    flex: 1
  },
  InputView: {
    flex: 4,
    width: '70%',
  },
  inputField: {
    borderWidth: 3,
    borderColor: 'gray',
    borderRadius: 5,
    color: '#000',
    paddingStart: 10,
  },
});
