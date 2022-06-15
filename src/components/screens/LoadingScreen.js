import React from 'react';
import { StyleSheet, View, ImageBackground, ActivityIndicator } from 'react-native';

const LoadingScreen = ({navigation}) => {

    setTimeout(() => {
        navigation.navigate('ShowDataScreen')
    }, 1500);

    
    return (
      <View>
        <ImageBackground source={require('../../assets/summer.png')} style={styles.fondo}>
          <View style = {styles.containerCentral}>
            <ActivityIndicator size={'large'} color={'white'}/>
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
  
    containerCentral:{
      alignItems:'center',
      backgroundColor: 'rgba(52,52,52,0.5)',
      flex: 1,
      marginTop: 40,
      marginBottom: 40,
      marginLeft: 30,
      marginRight: 30,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
  });


export default LoadingScreen;