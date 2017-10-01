import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  View,
  Model,
  PointLight,
  Text
} from 'react-vr';

export default class HelloWorld extends React.Component {
  constructor() {
    super();
    this.state = {textColor: 'white'};
  }

  render() {
    return (
      <View>
        <PointLight
          style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
        />
        <Pano source={asset('chess-world.jpg')} />
        <Model
          style={{
            transform: [
              {translate: [0, -5, -20]},
              {rotateY: -30},
              {rotateX: -40},
            ],
          }}
          source={{obj: asset('cube2.obj'), mtl: asset('cube2.mtl')}}
          lit
        />
        <Text
          style={{
            backgroundColor: '#777879',
            color: this.state.textColor,
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
          onEnter={() => this.setState({textColor: 'red'})}
          onExit={() => this.setState({textColor: 'white'})}>
          {this.state.textColor}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
