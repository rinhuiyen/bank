import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import styles from './Styles';
import CountDown from 'react-native-countdown-component';
import CardButton from './Components/CardButton';
export default class LotsOfStyles extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Add2');}
onCount = () => {
  
}

  render() {
    return (
      <View style={styles.container}>
<View>
        <Text style={styles.tacCode}>782345</Text>
        <Text style={styles.appTitle}>TAC expires in:</Text>
        
      <CardButton
              name="DONE"
              style={styles.cardButton}
              func={this.onAdd}
              
            />
<CountDown
        until={900}
        onFinish={() => alert('Transcation cancelled!')}
        size={20}
        digitBgColor='black'
        digitTxtColor='red'
        timeToShow={['M', 'S']}
      />
</View>
      </View>
    );
  }
}