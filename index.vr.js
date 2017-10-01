import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  View,
  Model,
  PointLight,
  Text,
  Box,
  Image
} from 'react-vr';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View>
      <PointLight
      style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
      />
      <Pano source={asset('chess-world.jpg')} />
      <Text
      style={{
        fontSize: 5,
        layoutOrigin: [0.5, 0.5],
        transform: [
          {translate: [0, -5, -20]}
        ],
        color: '#fffff',
      }}>
      hello
      </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
