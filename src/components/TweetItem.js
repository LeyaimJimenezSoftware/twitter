import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircleImage from './CircleImage';
import { Reactions } from './Reactions';

const TweetItem = ({item}) => {
  const {text, user, favorite_count, retweet_count} = item;
  return (
    <View style={styles.item}>
      <CircleImage url={user?.profile_image_url_https} />
      <View style={styles.tweetinfo}>
        <Text style={styles.text}>{`@${user.screen_name}`}</Text>
        <Text style={styles.title}>{text}</Text>
        <View style={styles.reactionContainer}>
          <Reactions images={require('../images/msg.png')} count={0} />
          <Reactions images={require('../images/reet.png')} count={retweet_count ? retweet_count : 0} />
          <Reactions images={require('../images/heart.png')} count={favorite_count ? favorite_count : 0} />
        </View>
      </View>
    </View>
  );
};

export default TweetItem;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
  },
  tweetinfo: {
    marginHorizontal: 10,
    width: '85%',
  },
  text: {
    color: 'gray',
  },
  reactionContainer: {
    flexDirection: 'row',
  },
});
