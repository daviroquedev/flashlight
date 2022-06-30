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



