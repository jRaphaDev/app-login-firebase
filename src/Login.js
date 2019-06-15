import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Item, Form, Input, Button, Label } from 'native-base';

import * as firebase from 'firebase';

export default class Login extends React.Component {

  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'xxxxxxxxxxxxxxxxxxxxx',
      authDomain: 'xxxxxxxxxxxxxxxxxxxxx',
      databaseURL: 'xxxxxxxxxxxxxxxxxxxxx',
      projectId: 'xxxxxxxxxxxxxxxxxxxxx',
      storageBucket: 'xxxxxxxxxxxxxxxxxxxxx',
      messagingSenderId: 'xxxxxxxxxxxxxxxxxxxxx',
      appId: 'xxxxxxxxxxxxxxxxxxxxx'
    };
    firebase.initializeApp(firebaseConfig);
  }

  constructor(props) {
    super(props);
    this.state = { email: '', password: '', user: '' };
  }

  render() {
    return (
      <Container  style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCapitalize='none' 
              autoCorrect={false} 
              onChangeText={email => this.setState({ email })}/>
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button style={styles.button}
            full 
            rounded
            onPress={() => this.signIn(this.state.email, this.state.password)}>
            <Text>SignIn</Text>
          </Button>

          <Button style={styles.button}
            full 
            rounded success style={{ marginTop: 20 }}
            onPress={() => this.signUp(this.state.email, this.state.password)}> 
            <Text>signUp</Text>
          </Button>
        </Form>
      </Container>
    );
  }

  signIn = (email, password) => {
    try {
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          this.setState({ user: response.user.toJSON()});
          this.props.navigation.navigate('Details')
        })
        .catch(error => this.setState({ error }));
    } catch (error) {
      console.log('***** ERROR *****')
      console.log(error.toString(error));
    }
  };

  signUp = (email, password) => {
    try {
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          console.log('cadastrado', response)
        })
        .catch(error => console.log(error.toString(error)));
    } catch (error) {
      console.log('***** ERROR *****')
      console.log(error.toString(error));
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  button: {
    padding: 60
  }
});
