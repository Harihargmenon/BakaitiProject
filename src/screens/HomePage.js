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

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is the Homepage of the Bakaiti Project</Text>
      <Card>
        <Text>Topic A</Text>
      </Card>
      <Card>
        <Text>Topic B</Text>
      </Card>
      <Card>
        <Text>Topic C</Text>
      </Card>
      <Card>
        <Text>Topic D</Text>
      </Card>
      <Card>
        <Text>Topic E</Text>
      </Card>
    </View>
  );
};

export default HomeScreen;
