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
  state = {
    checkedOne: true,
    checkedTwo: false,
    number: 1,
  };

  onAdd = () => {
    this.props.navigation.navigate('User2');
  };
 onAddMain = () => {
    this.props.navigation.navigate('Main');
  };

  changeChecked =()=> {
     this.setState({ 
          checkedOne: !this.state.checkedOne,
          checkedTwo: !this.state.checkedTwo
      })
  }
  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.appTitle}>Amount</Text>
          <CardInput style={styles.input} placeholder="Enter Amount" kt='numeric'/>
          
          <View>
          <CheckBox
            title="Savings"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedOne}
            onPress ={()=> this.changeChecked()}
  
          />
          <CheckBox
            title="Current"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedTwo}
            onPress={()=>this.changeChecked()}
          />
        </View>
        </View>

        

        <View style ={styles.tabBar}>
          <CardButton func={this.onAddMain} name="Cancel" style={styles.cardButton} />
          <View />
          <CardButton func={this.onAdd} name="Confirm" style={styles.cardButton} />
          <View />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
