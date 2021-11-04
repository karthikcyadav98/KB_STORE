import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{color: '#000', fontWeight: 'bold', fontSize: 25}}>
        video player app
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
