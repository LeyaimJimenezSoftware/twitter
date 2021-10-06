import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Separator} from './Separator';
import TweetItem from './TweetItem';
import * as RootNavigation from '../navigation/RootNavigation';

const TweetList = () => {
  const {tweets} = useSelector(state => state?.twitterReducer);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => RootNavigation.navigate('Tweet',  {
        item,
      })}>
        <Separator>
          <TweetItem item={item} />
        </Separator>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tweets}
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
