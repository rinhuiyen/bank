import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';
import CardButton from './Components/CardButton';
import CardInput from './Components/CardInput';
import { CheckBox } from 'react-native-elements'

export default class Add extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View>
            <Text style={styles.appTitle}>Add</Text>
            <CardInput
              style={styles.input}
              placeholder="Enter Account"
            />
          </View>

          <View>
           <Text style={styles.appTitle}>Add</Text>
           <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.checked}
          />
          </View>
          </View>
    );
  }
}


