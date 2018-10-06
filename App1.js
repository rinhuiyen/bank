import * as React from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback,
  Keyboard } from 'react-native';
import styles from './Styles';
import CardButton from './Components/CardButton';
import CardInput from './Components/CardInput';
import { CheckBox } from 'react-native-elements';
import DropdownMenu from 'react-native-dropdown-menu';


export default class Add extends React.Component {
  state = {
    checkedOne: true,
    checkedTwo: false,
    number: 1,
  };
  changeChecked =()=> {
     this.setState({ 
          checkedOne: !this.state.checkedOne,
          checkedTwo: !this.state.checkedTwo
      })
  }
  render() {
    var data = [["C", "Java", "JavaScript", "PHP"], ["Python", "Ruby"], ["Swift", "Objective-C"]];
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View>
          <Text style={styles.appTitle}>Amount</Text>
          <CardInput style={styles.input} placeholder="Enter Account Number" />
          
          <View>
          <CheckBox
            title="within Hong Leong Bank"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedOne}
            onPress ={()=> this.changeChecked()}
  
          />
          <CheckBox
            title="to Other Bank"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.checkedTwo}
            onPress={()=>this.changeChecked()}
          />
        </View>
        <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
          // optionTextStyle={{color: '#333333'}}
          // titleStyle={{color: '#333333'}} 
          // maxHeight={300} 
          handler={(selection, row) => this.setState({text: data[selection][row]})}
          data={data}
        >
 
          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>
 
        </DropdownMenu>
      </View>
        </View>
        
        <View>
        
        </View>

        <View style ={styles.tabBar}>
          <CardButton name="Cancel" style={styles.cardButton} />
          <View />
          <CardButton name="Confirm" style={styles.cardButton} />
          <View />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}
