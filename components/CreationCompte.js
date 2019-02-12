import React from 'react'
import { View, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native'

class CreationCompte extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: '',
      ErrorStatus : true,
     }
  }

  onEnterText = (TextInputValue) =>{
    if (TextInputValue.trim() != 0){
      this.setState({TextInputValue : TextInputValue, ErrorStatus : true});
    }else{
      this.setState({TextInputValue : TextInputValue, ErrorStatus : false});
    }
  }

  buttonClickListener = () =>{
    const { TextInputValue } = this.state ;
    if (TextInputValue == ""){
      Alert.alert("Des champs sont vides !")
    }
  }

  render() {
    return (
      <SafeAreaView >
        <TextInput style={styles.textinput} placeholder='Adresse Mail' onChangedText={TextInputValue => this.onEnterText(TextInputValue)}/>
        <TextInput style={styles.textinput} placeholder='Mot de Passe' secureTextEntry={true} onChangedText={TextInputValue => this.onEnterText(TextInputValue)}/>
        <TextInput style={styles.textinput} placeholder='Pseudonyme' onChangedText={TextInputValue => this.onEnterText(TextInputValue)}/>
        <TextInput style={styles.textinput} placeholder='Nom' onChangedText={TextInputValue => this.onEnterText(TextInputValue)}/>
        <TextInput style={styles.textinput} placeholder='Prénom' onChangedText={TextInputValue => this.onEnterText(TextInputValue)}/>
        { this.state.ErrorStatus == fasle ? (
          <Text style={styles.errorMessage}>Certains champs sont vides</Text>
        )}
      </SafeAreaView>
        <Button title='Je crée mon compte' onPress={this.buttonClickListener}}/>

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
