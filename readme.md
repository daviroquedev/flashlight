# APP FLASHLIGHT  EM CONSTRUÇÃO
Projeto final do bootcamp Decola Tech.

# PRIMEIRO PASSO

instalar as depedencias utilizando yarn

yarn add react-native-torch react-native-shake


# STYLESHEET AND ICONS

A troca dos styleSheet e icons foram feita por equação ternaria 
utilizando uma variavel toggle = bool //true //false
     
     style={toggle ? styles.containerLight : styles.container} >
     
    <Image
      source={toggle ? require('./assets/icons/eco-light.png') : require('./assets/icons/eco-light-off.png')}
      style={toggle ? styles.lightingOn : styles.lightingOff}
    />

    <Image
      source={toggle ? require('./assets/icons/logo-dio.png') : require('./assets/icons/logo-dio-white.png')}
      style={styles.dioLogo}
    />



# DEPEDENCIAS

precisamos das dependencias Torch e RNShake para ativar a lanterna com o chocoalho do celular. Utilizamos elas com o useEffect. 

import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'


![image](https://user-images.githubusercontent.com/101668192/176780119-2b2b45a8-19d0-491d-a83a-f3b2e9875160.png)

  
  # VIDEO APK FUNCIONAMENTO
  
  Voce pode baixar o APK em releases 

https://user-images.githubusercontent.com/101668192/176779987-418fadcd-dc48-4828-b6ba-8ac7f046984f.mp4


