import React from 'react'
import { View, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'

class Connexion extends React.Component {

  render() {
    return (
      <SafeAreaView>
      <TextInput style={styles.textinput} id='username' placeholder='Pseudonyme'/>
        <TextInput style={styles.textinput} type='password' id='MdP' placeholder='Mot de Passe' secureTextEntry={true}/>
        <Button id='connexion' title='Connexion' />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 0.5,
    paddingLeft: 3
  }
})

export default Connexion
