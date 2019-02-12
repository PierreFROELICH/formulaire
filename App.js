import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import CreationCompte from './components/CreationCompte'
import Navigation from './Navigation/Navigation'


export default class App extends React.Component {
  render() {
    return (
        <Navigation/>
    )
  }
}
