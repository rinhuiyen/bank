import * as React from 'react';
import amount from './Amount';
import transfer from './Transfer';
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
  {
    Amount: amount,
    Transfer: transfer,
  },
  {
    initialRouteName: 'Amount',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}