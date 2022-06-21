//import react native elements
import React, {Component, useState} from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';

//onclick the button, toggle isSelected state

//create TopicCard component
const TopicCard = ({topic}) => {
  //define the options state
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonContainer}
        //handle onpress to change state
        onPress={() => setIsSelected(!isSelected)}>
        <Text style={styles.buttonText}>{topic}</Text>
      </TouchableOpacity>
      {isSelected && (
        <View style={styles.optionContainer}>
          <Text style={styles.option}>-1</Text>
          <Text style={styles.option}>0</Text>
          <Text style={styles.option}>1</Text>
          <Text style={styles.option}>2</Text>
        </View>
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
    //text center
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '80%',
    height: 50,
    padding: 10,
    alignItems: 'center',
    borderRadius: 3,
  },
  option: {
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    color: 'red',
    fontFamily: 'Lato-Regular',
  },
});

export default TopicCard;
