//import react native elements
import React, {Component, useContext, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigations/AuthProvider';

//create TopicCard component
const TopicCard = ({topic}) => {
  //define the options state
  const [isSelected, setIsSelected] = useState(false);
  const {addTopic} = useContext(AuthContext);

  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        //handle onpress to change state
        onPress={() => {
          setIsSelected(!isSelected);
        }}>
        <Text style={styles.buttonText}>{topic}</Text>
      </TouchableOpacity>
      {isSelected && (
        <>
          <View style={styles.optionContainer}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                addTopic(topic, -1);
                setIsSelected(!isSelected);
              }}>
              <Text style={styles.optionText}>-1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                addTopic(topic, 0);
                setIsSelected(!isSelected);
              }}>
              <Text style={styles.optionText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                addTopic(topic, 1);
                setIsSelected(!isSelected);
              }}>
              <Text style={styles.optionText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                addTopic(topic, 2);
                setIsSelected(!isSelected);
              }}>
              <Text style={styles.optionText}>2</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

//styling the component
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    width: '80%',
    height: 50,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '90%',
    height: 50,
    padding: 10,
    alignItems: 'center',
    borderRadius: 3,
  },
  option: {
    backgroundColor: '#00ff00',
    padding: 10,
    borderRadius: 3,
    height: 50,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  optionText: {
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 'bold',

    alignItems: 'center',
    fontFamily: 'Lato-Regular',
  },
});

export default TopicCard;
