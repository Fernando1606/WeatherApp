import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AskingForDataScreen from './screens/AskingForDataScreen'
import { NavigationContainer } from '@react-navigation/native'
import LoadingScreen from './screens/LoadingScreen'
import ShowDataScreen from './screens/ShowDataScreen'

const Routes = () => {
    
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="AskingForDataScreen" component={AskingForDataScreen}/>
                <Stack.Screen name="LoadingScreen" component={LoadingScreen}/>
                <Stack.Screen name="ShowDataScreen" component={ShowDataScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;