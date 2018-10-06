import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import styles from './Styles';
import CountDown from 'react-native-countdown-component';
import CardInput from './Components/CardInput';
import CardButton from './Components/CardButton';

export default class LotsOfStyles extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Add1');}
  render() {
    
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View>
            <CardInput style={styles.input} placeholder="Enter the TAC code"
            kt= 'numeric' />
            <CardButton
              name="Send TAC code"
              style={styles.tacCode}
              
            />
            
            <CardButton
              name="Cancel"
              style={styles.button}
              func={this.onAdd}
            />
            <Text style={styles.appTitle}>TAC expires in:</Text>
            <CountDown
              until={60}
              onFinish={() => alert('Transcation cancelled!')}
              size={20}
              digitBgColor="black"
              digitTxtColor="red"
              timeToShow={['M', 'S']}
            />
            <CardButton
              name="Done"
              style={styles.button}
              func={this.onAdd}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}