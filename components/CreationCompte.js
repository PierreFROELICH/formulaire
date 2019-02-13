import React from 'react'
import { View, Button, SafeAreaView, StyleSheet } from 'react-native'
import TextField from './TextField'
import Validation from './Validation'
import Validate from './ValidateWrapper'

class CreationCompte extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      passwordError: '',
      passwordError: '',
      username: '',
      usernameError: '',
      nom: '',
      nomError: '',
      prenom: '',
      prenomError: ''
     }
  }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('passwordError', this.state.passwordError)
    const usernameError = validate('username', this.state.username)
    const nomError = validate('nom', this.state.nom)
    const prenomError = validate('prenom', this.state.prenom)

    this.setState({
      emailError: emailError,
      passwordError: passwordError,
      usernameError: usernameError,
      nomError: nomError,
      prenomError: prenomError
    })

    if (!emailError && !passwordError && !usernameError && !nomError && !prenomError ){
      alert('Attention certains champs sont vides ou invalides')
    }
  }

  render() {
    return (
      <View>
      <TextField
        onChangeText={value => this.setState({email: value.trim()})}
        onBlur={() => {
          this.setState({
            emailError: validate('adresse mail', this.state.email)
          })
        }}
        error={this.state.emailError} />
        <TextField
          onChangeText={value => this.setState({password: value.trim()})}
          onBlur={() => {
            this.setState({
              passwordError: validate('mot de passe', this.state.password)
            })
          }}
          error={this.state.passwordError}/>
          <TextField
          onChangeText={value => this.setState({username: value.trim()})}
          onBlur={() => {
            this.setState({
              usernameError: validate('Pseudo', this.state.username)
            })
          }}
          error={this.state.usernameError}/>
          <TextField
          onChangeText={value => this.setState({nom: value.trim()})}
          onBlur={() => {
            this.setState({
              nomError: validate('nom', this.state.nom)
            })
          }}
          error={this.state.nomError}/>
          <TextField
          onChangeText={value => this.setState({prenom: value.trim()})}
          onBlur={() => {
            this.setState({
              prenomError: validate('prenom', this.state.prenom)
            })
          }}
          error={this.state.prenom}/>
          <Button
            title='Je créer mon compte'
            onPress={this.validateRegister}
          />
      </View>
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
  },
  errorMessage: {
    fontSize: 20,
    color: "red",
    marginLeft: -80,
  }
});

export default CreationCompte
