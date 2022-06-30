import React from 'react'
import { View, StyleSheet, Image } from 'react-native'


const App = () => {

  const toggle = true; //false

  
  return (
  
  <View style={toggle ? styles.containerLight : styles.container} >
    <Image
      source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
      style={toggle ? styles.lightingOn : styles.lightingOff}
    />

    <Image
      source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
      style={styles.dioLogo}
    />



  </View>
)}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,

  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,

  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 150,

  },

});
