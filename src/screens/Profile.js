import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import UserInfo from '../components/UserInfo';
import TweetList from '../components/TweetList';
import FlashMessage from "react-native-flash-message";

const Profile = () => {
  const {user, tweets} = useSelector(state => state?.twitterReducer);
  return (
    <View style={styles.container}>
      {user && <UserInfo />}
      {tweets && <TweetList />}
      <FlashMessage icon={'auto'} position="top" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
