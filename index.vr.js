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
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: true,
      result:JSON.parse('{"id":229294491,"url":"/229294491/cs-questions-flash-cards/","title":"CS Questions","created_by":"vincentw_","term_count":5,"created_date":1506819253,"modified_date":1506820304,"published_date":1506820304,"has_images":false,"subjects":[],"visibility":"public","editable":"only_me","has_access":true,"can_edit":false,"description":"","lang_terms":"en","lang_definitions":"en","password_use":0,"password_edit":0,"access_type":2,"creator_id":69076717,"creator":{"username":"vincentw_","account_type":"free","profile_image":"https://quizlet.com/a/i/animals/18.cGWP.jpg","id":69076717},"class_ids":[],"terms":[{"id":7566697266,"term":"When talking about computer memory, what does the acronym ROM stand for?","definition":"Read-only memory","image":null,"rank":0},{"id":7566700352,"term":"How many bits are in a byte?","definition":"8","image":null,"rank":1},{"id":7566712668,"term":"What does HTML stand for?","definition":"Hypertext Markup Language","image":null,"rank":2},{"id":7566746488,"term":"The binary system uses powers of","definition":"2","image":null,"rank":3},{"id":7566770044,"term":"Java and JavaScript are the same. True or False?","definition":"False","image":null,"rank":4}]}'),
      index:0,
      lefttext: "DEFINITION",
      righttext: "NEXT",
      display: "",
      definition: false,
      startup: true
    }
  }
  
  render() {
    if (this.state.startup){
      this.setState({
        startup: false,
        display: this.state.result.terms[this.state.index].term
      });
    }
    
    return (
      <View>
        <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />
        <Pano source={asset('chess-world.jpg')} />
        <View
          style={{
            flexDirection:'row',
            width: 40,
            flexGrow: 1,
          }}
        >
          <Text
            style={{
              fontSize: 2,
              layoutOrigin: [0.5, 0.5],
              transform: [
                {translate: [0, 0, -20]}
              ],
              color: 'white',
              flex: 1, 
              flexWrap: 'wrap'
            }}
          >
            {this.state.display}
          </Text>
          <Text
            onEnter={() => this.setState({
              index: this.state.index+1,
              display: this.state.result.terms[this.state.index+1].term})}
            style={{
            fontSize: 2,
            layoutOrigin: [0.5, 0.5],
            transform: [
              {translate: [+50, 0, -20]}
            ],
            color: 'white',
            flex: 1, 
            flexWrap: 'wrap'
            }}
          >
            {this.state.righttext}
          </Text>
          <Text
            onEnter={() => this.setState({display: this.state.result.terms[this.state.index].definition })}
            style={{
              fontSize: 2,
              layoutOrigin: [0.5, 0.5],
              transform: [
                {translate: [-50, 0, -20]}
              ],
              color: 'white',
              flex: 1, 
              flexWrap: 'wrap'
            }}
          >
            {this.state.lefttext}
          </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
