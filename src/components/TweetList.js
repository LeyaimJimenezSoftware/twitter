import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import {Separator} from './Separator';
import TweetItem from './TweetItem';
import * as RootNavigation from '../navigation/RootNavigation';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const TweetList = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => RootNavigation.navigate('Tweet')}>
      <Separator>
        <TweetItem title={item.title} />
      </Separator>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TweetList;

const styles = StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
  },
  item: {
    padding: 5,
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
  },
  tweetinfo: {
    marginHorizontal: 20,
    width: '85%',
  },
  text: {
    color: 'gray',
  },
});
