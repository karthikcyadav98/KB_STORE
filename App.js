import 'react-native-gesture-handler';
import React, {useEffect, Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import CodePush from 'react-native-code-push';
import Navigation from './src/Navigation/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSplashscreen: true,
    };
  }

  componentDidMount() {
    this.codePushUpdate();
    setTimeout(() => {
      this.setState({isSplashscreen: false});
    }, 1000);
  }

  codePushUpdate = () => {
    CodePush.sync({
      updateDialog: false,
      installMode: CodePush.InstallMode.IMMEDIATE,
    });
  };

  render() {
    return (
      <>
        {this.state.isSplashscreen ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#49C8FA',
            }}>
            <Text style={{color: '#9C0049', fontSize: 25, fontWeight: 'bold'}}>
              SPLASHSCREEN
            </Text>
          </View>
        ) : (
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        )}
      </>
    );
  }
}

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_START,
  installMode: CodePush.InstallMode.IMMEDIATE,
};

export default App = CodePush(codePushOptions)(App);

const styles = StyleSheet.create({});
