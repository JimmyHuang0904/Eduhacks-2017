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
    padding: 0.5,
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
    result:JSON.parse('{"id":229294491,"url":"/229294491/cs-questions-flash-cards/","title":"CS Questions","created_by":"vincentw_","term_count":20,"created_date":1506819253,"modified_date":1506881829,"published_date":1506820304,"has_images":false,"subjects":[],"visibility":"public","editable":"only_me","has_access":true,"can_edit":false,"description":"","lang_terms":"en","lang_definitions":"en","password_use":0,"password_edit":0,"access_type":2,"creator_id":69076717,"creator":{"username":"vincentw_","account_type":"free","profile_image":"https://quizlet.com/a/i/animals/18.cGWP.jpg","id":69076717},"class_ids":[],"terms":[{"id":7566697266,"term":"When talking about computer memory, what does the acronym ROM stand for?","definition":"Read-only memory","image":null,"rank":0},{"id":7566700352,"term":"How many bits are in a byte?","definition":"8","image":null,"rank":1},{"id":7566712668,"term":"What does HTML stand for?","definition":"Hypertext Markup Language","image":null,"rank":2},{"id":7566746488,"term":"The binary system uses powers of","definition":"2","image":null,"rank":3},{"id":7566770044,"term":"Java and JavaScript are the same. True or False?","definition":"False","image":null,"rank":4},{"id":7569741662,"term":"A program is a set of","definition":"instructions","image":null,"rank":5},{"id":7570959724,"term":"Define: CPU","definition":"Central Processing Unit - Known as the processor or microprocessor. It is responsible for executing a sequence of stored instructions called a program.","image":null,"rank":6},{"id":7570979246,"term":"What is the Waterfall model (software development process)?","definition":"Waterfall is a sequential design process. Flowing steadily downwards (like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, implementation and maintenance.","image":null,"rank":7},{"id":7571017305,"term":"What does OS stand for?","definition":"Operation System","image":null,"rank":8},{"id":7571037430,"term":"What is an AND gate?","definition":"An AND gate is a basic digital logic gate that implements logical conjunction","image":null,"rank":9},{"id":7571050502,"term":"What is an OR gate?","definition":"An OR gate is a digital logic gate that implements logical disjunction","image":null,"rank":10},{"id":7571070745,"term":"What is Database Normalization?","definition":"The process of organizing the columns (attributes) and tables (relations) of a relational database to reduce data redundancy and improve data integrity.","image":null,"rank":11},{"id":7571096837,"term":"What is Dijkstras algorithm?","definition":"An algorithm for finding the shortest paths between nodes in a graph","image":null,"rank":12},{"id":7571117955,"term":"What is a greedy algorithm?","definition":"Making the locally optimal choice at each stage with the hope of finding a global optimum","image":null,"rank":13},{"id":7571155472,"term":"Which is faster, UDP or TCP?","definition":"UDP is faster than TCP. UDP permits a continuous packet stream, instead of TCP that acknowledges a set of packets, calculated by using the TCP window size and round-trip time (RTT).","image":null,"rank":14},{"id":7571184333,"term":"Which maintains order of packets, UDP or TCP?","definition":"TCP maintains sequence. TCP uses, 3 way handshake, congestion control, flow control and other mechanism to make sure the reliable transmission.","image":null,"rank":15},{"id":7571217986,"term":"What is a Hackathon?","definition":"An event, typically lasting several days, in which a large number of people meet to engage in collaborative computer programming.","image":null,"rank":16},{"id":7571238834,"term":"What is O(1) time complexity?","definition":"O(1) means that, no matter how much data, it will execute in constant time.","image":null,"rank":17},{"id":7571238835,"term":"What is O(n) time complexity?","definition":"O(n) means that it is proportional to the amount of data.","image":null,"rank":18},{"id":7571261463,"term":"What is VR?","definition":"Virtual Reality (VR) is the use of computer technology to create a simulated environment. Unlike traditional user interfaces, VR places the user inside an experience.","image":null,"rank":19}]}'),
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
            fontSize: 3,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            minHeight: 2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 5, -4]}],
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
            maxWidth: 20,
            minWidth: 20,
            maxHeight: 15,
            minHeight: 15,
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
            fontSize: 4,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            minHeight: 3,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 9, -6]}],
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
            transform: [{translate: [20, 18, -6]},
            {rotateY: "-20deg"}],
          }}
          >
            {this.state.bottomtext}
          </Text>

      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
