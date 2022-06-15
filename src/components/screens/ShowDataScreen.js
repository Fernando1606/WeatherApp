import React, {useEffect, useState} from 'react';
import { StyleSheet, View, ImageBackground, Text, FlatList } from 'react-native';

const ShowDataScreen = ({navigation, route}) => {


    {/*Hora */}
    const [hora, setHora] = useState('');

    setInterval(()=>{
        var fechaAux = new Date().toLocaleTimeString().substring(0,5);
        setHora(fechaAux)
      }, 1)

    {/*Solicitud de datos a la Api */}

    const [weather, setWeather] = useState(null);


  {/*  const getWeather = () => {

        // Obtenemos el tiempo mediante la Api de ApiWeather
        let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' +39.54+ '&lon=' +9.86+ '&units=metric&appid=e211b997f44900352996a05e4154b588';
        fetch(url)
        .then(response => response.json())
        .then((responseJson)=>{
          setWeather(responseJson)
        })
      }

    const dataWeather = () => {
        return weather?.list&&[weather?.list[0]]
    }


      

    const {latitudObtenida} = route.params;
    const {longitudObtenida} = route.params;

*/}
    return (
        //getWeather(),
      <View>
        <ImageBackground source={require('../../assets/summer.png')} style={styles.fondo}>
          <View style = {styles.containerCentral}>
                        
            {/*Hora*/}
            <Text style={styles.hora}>{hora}</Text>

            {/*Texto ciudad*/}

            {/*<Text>{latitudObtenida}</Text> */}

            {/*Datos del tiempo*/}

            {/*<FlatList
                data={dataWeather()}
                keyExtractor={item => item.dt_txt} 
                renderItem={({item}) =>
                    <ForecastCard
                        detail={item} 
                        location={weather.city.name}
                    />}
    />*/}

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
      marginRight: 30,
    },
  });


export default ShowDataScreen;