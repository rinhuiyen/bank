import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import styles from './Styles';
import CardButton from './Components/CardButton';
import CardInput from './Components/CardInput';
import { CheckBox } from 'react-native-elements';

export default class Add extends React.Component {
  static navigationOptions = {
    header: null,
  };

  onAddTransfer = () => {
    this.props.navigation.navigate('Transfer');
  };

  onAddAmount = () => {
    this.props.navigation.navigate('Amount');
  };

  render() {

    return (
      <View style ={styles.tabBar}>
          <CardButton func={this.onAddTransfer} name="Transfer" style={styles.cardButton} />
          <View />  
          <CardButton func={this.onAddAmount} name="Withdrawal" style={styles.cardButton} />
          <View />
        </View>
    );
  }
}
