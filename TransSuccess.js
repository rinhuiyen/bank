import React, { Component } from 'react';
import { AppRegistry, View, Image,Text } from 'react-native';
import styles from './Styles';
import CardButton from './Components/CardButton';

export default class DisplayAnImage extends Component {
  static navigationOptions = {
    header: null,
  };
    onAdd = () => {this.props.navigation.navigate('Main');}
  render() {
    return (
      <View>
        <Image
          style={{ width: 200, height: 50,style:'center',paddingTop:350,paddingLeft:350}}
          source={{
            uri: 'https://png.pngtree.com/svg/20161227/a_completed_1323890.png',
          }}
        />
        <Text style={styles.appTitle}>Transaction Success!</Text>
        <CardButton
              name="OK"
              style={[styles.withdrawalOK,styles.cardButton]}
              func={this.onAdd}
            />
      </View>
    );
  }
}