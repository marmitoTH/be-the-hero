import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Detail from './pages/Detail'

export type StackParams = {
  Detail: {
    incident: {
      title: string
      description: string
      value: number

      ong: {
        name: string
        whatsapp: string
        email: string
      }
    }
  }
}

const Router = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router
