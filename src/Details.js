import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Item, Form, Label } from "native-base";

export default class Details extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label> Logado \o/ </Label>
          </Item>
        </Form>
      </Container>
    );
  }

  signIn = (email, password) => {
    try {

    } catch (error) {
      console.log("***** ERROR *****")
      console.log(error.toString(error));
    }
  };
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
