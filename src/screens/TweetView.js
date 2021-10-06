import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CircleImage from '../components/CircleImage';
import ShareAndComment from '../components/Share';
import { Reactions } from '../components/Reactions';

const TweetView = ({route}) => {
  const {item} = route.params;
  const {text, user, favorite_count, retweet_count} = item;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.userDataContainer}>
          <CircleImage
            url={user?.profile_image_url_https}
          />
          <View style={styles.textInfo}>
            <Text>{user.screen_name}</Text>
            <Text>{`@${user.screen_name}`}</Text>
          </View>
        </View>

        <View style={styles.textContainer}>
          <Text>
            {text}
          </Text>
        </View>
        <View style={styles.reactionContainer}>
          <Reactions images={require('../images/msg.png')} count={0} />
          <Reactions images={require('../images/reet.png')} count={retweet_count} />
          <Reactions images={require('../images/heart.png')} count={favorite_count} />
        </View>
      </View>

      <ShareAndComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  userDataContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textInfo: {
    marginLeft: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  reactionContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  textContainer: {
    marginLeft: 20,
    marginVertical: 10,
  },
});

export default TweetView;
