import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text style={{color: '#000'}}>Codepush test completed</Text>

      <VideoPlayer
        video={{uri: 'https://photos.app.goo.gl/Ft3srYt6zmgS6vid8'}}
        autoplay={false}
        defaultMuted={true}
        videoWidth={500}
        videoHeight={500}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 500,
    height: 500,
  },
});
