/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import response from './src/services/index';
import NavigationStack from './src/navigation/NavigationStack';

const App = () => {
  useEffect(() => {
    const user = async () => {
      let result = await response.getUser();
      let resultTweet = await response.getLastTweets();
      console.log('res', result.data);
      console.log('tweeet', resultTweet.data);
    };

    user();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
