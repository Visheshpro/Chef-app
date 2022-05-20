import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './navigation/tabNavigator'

import {firebaseConfig} from './config'

import firebase from 'firebase'

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export default class App extends React.Component{
  render(){
    return(
<NavigationContainer>
<TabNavigator />
</NavigationContainer>
    )
  }
}