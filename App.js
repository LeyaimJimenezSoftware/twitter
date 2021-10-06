import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import {getUserData, getUserTweets} from './src/redux/actions/index';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getUserTweets())
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
});

export default App;
