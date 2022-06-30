import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'


const App = () => {

  const [toggle, setToggle] = useState(false);

  const handleChangleToggle = () => setToggle(oldToggle => !oldToggle)

  useEffect(()=>{
  //liga 
  Torch.switchState(toggle);
  }, [toggle]);

  useEffect( ()=>{
    /** 
     * quando o  celular for chacoalhado mudaremos o toggle
     * 
    */
    const subscription = RNShake.addListener(()=>{
      handleChangleToggle(oldToggle => !oldToggle);
    });

    // ESSA FUNÇÃO VAI SER CHAMADA QUANDO O COMPONENTS
    // FOR SER DESMONTADO
    return () => subscription.remove();
  },[])

  return (



    <View style={toggle ? styles.containerLight : styles.container} >
      <TouchableOpacity onPress={handleChangleToggle}>
        <Image
          source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
          style={toggle ? styles.lightingOn : styles.lightingOff}
        />
        <Image
          source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
          style={styles.dioLogo}
        />
      </TouchableOpacity>


    </View>
  )
}



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
