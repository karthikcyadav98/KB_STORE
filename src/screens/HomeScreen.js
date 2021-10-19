// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

// const HomeScreen = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//       }}>
//       <Text style={{color: '#000'}}>Codepush test completed</Text>
//       <View style={{width: 100, height: 100}}>
//         <Video
//           style={{width: 300, height: 300}}
//           source={{
//             uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//           }}
//           ref={ref => {
//             this.player = ref;
//           }}
//         />
//       </View>
//       {/* <VideoPlayer
//         video={{
//           uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
//         }}
//         videoWidth={1600}
//         videoHeight={900}
//         thumbnail={{uri: 'https://i.picsum.photos/id/866/1600/900.jpg'}}
//       /> */}
//
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   backgroundVideo: {
//     width: 500,
//     height: 500,
//   },
// });

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Video from 'react-native-video';

class HomeScreen extends React.Component {
  videoBuffer = isBuffer => {
    console.log(isBuffer);
    //here you could set the isBuffer value to the state and then do something with it
    //such as show a loading icon
  };
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
        <Text>My video project!</Text>
        <View>
          <Video
            source={{
              uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
            }}
            style={{width: 300, height: 300}}
            controls={true}
            onBuffer={this.videoBuffer}
            ref={ref => {
              this.player = ref;
            }}
            autoplay={false}
          />

          <VideoPlayer
            video={{uri: 'https://photos.app.goo.gl/Ft3srYt6zmgS6vid8'}}
            autoplay={false}
            defaultMuted={true}
            videoWidth={500}
            videoHeight={500}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
