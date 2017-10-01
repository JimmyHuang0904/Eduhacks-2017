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

var styles = {
  element: {
    flex: 1, 
    flexWrap: 'wrap',
    layoutOrigin: [0.5, 0.5]
  },
  centreElement: {
    backgroundColor: '#ddd',
    padding: 1,
    minWidth: 16,
    minHeight: 10,
  },
  centreTextElement: {
    color: 'black',
    fontSize: 2,
  },
  sideElement: {
    fontSize: 1,
    color: 'white',
    minWidth: 12,
    minHeight: 4
  }
}

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textColor: 'white', coord: [0.0, 0.0],
    isToggleOn: true,
    result:JSON.parse('{"id":229294491,"url":"/229294491/cs-questions-flash-cards/","title":"CS Questions","created_by":"vincentw_","term_count":5,"created_date":1506819253,"modified_date":1506820304,"published_date":1506820304,"has_images":false,"subjects":[],"visibility":"public","editable":"only_me","has_access":true,"can_edit":false,"description":"","lang_terms":"en","lang_definitions":"en","password_use":0,"password_edit":0,"access_type":2,"creator_id":69076717,"creator":{"username":"vincentw_","account_type":"free","profile_image":"https://quizlet.com/a/i/animals/18.cGWP.jpg","id":69076717},"class_ids":[],"terms":[{"id":7566697266,"term":"When talking about computer memory, what does the acronym ROM stand for?","definition":"Read-only memory","image":null,"rank":0},{"id":7566700352,"term":"How many bits are in a byte?","definition":"8","image":null,"rank":1},{"id":7566712668,"term":"What does HTML stand for?","definition":"Hypertext Markup Language","image":null,"rank":2},{"id":7566746488,"term":"The binary system uses powers of","definition":"2","image":null,"rank":3},{"id":7566770044,"term":"Java and JavaScript are the same. True or False?","definition":"False","image":null,"rank":4}]}'),
    index:0,
    lefttext: "DEFINITION",
    righttext: "NEXT",
    bottomtext: "CHANGE BACKGROUND",
    display: "",
    definition: false,
    startup: true,
    background: "future.jpg",
    questionLength: 0,
    correctcount: 0,
    incorrectcount: 0,
    incorrect: false,
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  render() {
    var backgrounds = [
      "black.jpg",
      "whiteroom.jpg",
      "chess-world.jpg",
      "daydream.png",
      "future.jpg",
      "htc.jpg",
      "stars.png"
    ]

    if (this.state.startup){
    this.setState({
        startup: false,
        display: this.state.result.terms[this.state.index].term,
        questionLength: this.state.result.terms.length
        });
}

    return (
      <View
        onMove={(offset) => this.setState({coord: offset[0]*10})}>
        <PointLight
          style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
        />
        <Pano source={asset(this.state.background)} />
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
            transform: [{translate: [0, 4, -3]}],
          }}
          onEnter={() => this.setState({
            display: this.state.result.terms[this.state.index].definition,
            incorrectcount : this.state.incorrectcount+1,
            incorrect: true
             })}
          >
          Answer
        </Text>
        <View
            style={{
              ...styles.element,
              ...styles.centreElement,
              transform: [
                {translate: [0, 0, -30]}
              ],
              layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            maxWidth: 20,
            minWidth: 20,
            textAlign: 'center',
            textAlignVertical: 'center',
            }}>
            <Text
              style={{
                ...styles.centreTextElement
              }}
            >
              {this.state.display}
            </Text>
            <Text
            style={{
              ...styles.textElement,
              ...styles.centreTextElement,
            }}
          >
            Incorrect: {this.state.incorrectcount} Correct: {this.state.correctcount}
          </Text>
          </View>
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
            transform: [{translate: [0, 7, -6]}],
          }}
          onEnter={() => this.setState({
            index: this.state.index+1,
            display: this.state.index==this.state.questionLength-1? "Complete!" : this.state.result.terms[this.state.index+1].term,
            correctcount: this.state.incorrect? this.state.correctcount : this.state.correctcount+1,
            incorrect : false
          })}
          >
          {this.state.righttext}
        </Text>
        <Text
            onEnter={() => this.setState({
              background: backgrounds[this.getRandomInt(0, 7)] })}
            style={{
            backgroundColor: '#777879',
            color: this.state.textColor,
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0.1,
            paddingBottom: 0.1,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [20, 12, -6]}],
          }}
          >
            {this.state.bottomtext}
          </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
