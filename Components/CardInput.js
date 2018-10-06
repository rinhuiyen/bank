import * as React from 'react';
import { TextInput, Text, View } from 'react-native';
import styles from '../Styles'

export default class CardInput extends React.Component {
  render() {
    return (
      <View style={styles.card}>
            <TextInput
              style={this.props.style}
              placeholder={this.props.placeholder}
              autoCorrect="false"
              onChangeText={this.props.changeText}
              value={this.props.value}
              multiline={this.props.multiline}
              secureTextEntry={this.props.secure}
              keyboardType = {this.props.kt}
            />
        </View>
    );
  }
}