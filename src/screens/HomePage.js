import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  TextInput,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import Ionicons from 'react-native-vector-icons/Ionicons';

//import PostCard from '../components/PostCard';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import {Card, Container} from '../styles/FeedStyles';
import TopicCard from '../components/TopicCard';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the Homepage of the Bakaiti Project</Text>
      <View>
        <TopicCard topic="Climate change" />
        <TopicCard topic="Food" />
        <TopicCard topic="Health" />
        <TopicCard topic="Environment" />
        <TopicCard topic="Education" />
        <TopicCard topic="Human rights" />
      </View>
    </View>
  );
};

export default HomeScreen;
