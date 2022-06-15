import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import LoadingScreen from './LoadingScreen';

const AskingForDataScreen = ({navigation, route}) => {
    const [hora, setHora] = useState('');
    const [latitud,setLatitud] = useState('');
    const [longitud,setLongitud] = useState('');
    const latitudObtenida = route.params;
    const longitudObtenida = route.params;

    const handleLatitudTextChange = (text) => setLatitud(text);
    const handleLongitudTextChange = (text) => setLongitud(text);

  
  
    setInterval(()=>{
      var fechaAux = new Date().toLocaleTimeString().substring(0,5);
      setHora(fechaAux)
    }, 1)
    
    return (
      <View>
        <ImageBackground source={require('../../assets/summer.png')} style={styles.fondo}>
          <View style = {styles.containerCentral}>
  
            {/*Hora*/}
            <Text style={styles.hora}>{hora}</Text>
  
            {/*Introducimos los datos para soliciar la api */}
  
            
  
            <TextInput placeholder='Introduce la latitud' onChangeText={handleLatitudTextChange} style={styles.introduccionDatosLatitud} placeholderTextColor={'white'} keyboardType={'number-pad'}/>
  
            {/* Botón para solicitar datos a la api */}
  
            {/*Introducimos los datos para soliciar la api */}
  
            
  
            <TextInput placeholder='Introduce la longitud' onChangeText={handleLongitudTextChange} style={styles.introduccionDatosLongitud} placeholderTextColor={'white'} keyboardType={'number-pad'}/>
  

            <TouchableOpacity style={styles.botonEnvioDatos} onPress={()=> navigation.navigate(LoadingScreen)}>

            {/*onPress={()=> navigation.navigate(LoadingScreen, {latitudObtenida: {latitud},longitudObtenida: {longitud}})} */}

              <Text style={styles.textoBoton} >Enviar</Text>
            </TouchableOpacity>
  
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
  
    fondo:{
      width: 360,
      height: 735,
    },
  
    hora: {
      fontSize: 100,
      color: 'white',
      fontFamily: 'Varela-Regular',
      marginTop: 50
    },
  
    containerCentral:{
      alignItems:'center',
      backgroundColor: 'rgba(52,52,52,0.5)',
      flex: 1,
      marginTop: 40,
      marginBottom: 40,
      marginLeft: 30,
      marginRight: 30
    },
  
    introduccionDatosLatitud: {
      borderStartWidth: 80,
      borderEndWidth : 80,
      borderTopWidth : 3,
      borderLeftWidth: 3,
      borderRightWidth: 3,
      borderBottomWidth : 3,
      borderColor: 'white',
      marginTop: 150,
      fontSize: 15,
      textAlign: 'center',
      backgroundColor: 'rgba(52,52,52,0.8)',
      width: 250,
      color: 'white'
    },
  
    textoBoton:{
      color: 'white',
      fontSize: 25,
    },
  
    botonEnvioDatos: {
      borderColor: 'white',
      borderStartWidth: 5,
      borderEndWidth : 5,
      borderTopWidth : 5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      borderBottomWidth : 5,
      marginTop:20, 
      borderRadius: 100,
      width: 120,
      height: 120,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52,52,52,0.8)',
      marginTop: 60
   },

   introduccionDatosLongitud: {
    borderStartWidth: 80,
    borderEndWidth : 80,
    borderTopWidth : 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth : 3,
    borderColor: 'white',
    marginTop: 50,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'rgba(52,52,52,0.8)',
    width: 250,
    color: 'white'
  },
    
  });


export default AskingForDataScreen;