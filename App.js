import * as React from 'react';
import main from './MainPage';
import amount from './Amount';
import transfer from './Transfer';
import userMain from './Successmonkey1';
import userMain1 from './Successmonkey1.1';
import edit from './Successmonkey2';
import add from './Successmonkey3';
import add1 from './TransSuccess';
import add2 from './Withdraw';
import { createStackNavigator } from 'react-navigation';


const RootStack = createStackNavigator(
  {
    Main: main,
    Amount: amount,
    Transfer: transfer,
    User1: userMain,
    User2: userMain1,
    Edit: edit,
    Add: add,
    Add1: add1,
    Add2: add2
  },
  {
    initialRouteName: 'Main',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}