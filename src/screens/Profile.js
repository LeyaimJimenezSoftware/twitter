import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  SectionList,
  View,
} from 'react-native';
import UserInfo from '../components/UserInfo';
import TweetList from '../components/TweetList';
import CreateTweet from '../components/CreateTweet';

const Profile = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <TweetList />
      <CreateTweet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Profile;
