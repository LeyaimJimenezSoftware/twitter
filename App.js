import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FlashMessage, {showMessage} from 'react-native-flash-message';
import {SafeAreaView, StyleSheet} from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';
import {
  getUserData,
  getUserTweets,
  openCreateModal,
  tweetSuccess,
  setError,
} from './src/redux/actions/index';
import CreateTweet from './src/components/CreateTweet';

const App = () => {
  const {tweeetSuccess, error} = useSelector(state => state?.twitterReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getUserTweets());
  }, []);

  useEffect(() => {
    if (tweeetSuccess) {
      dispatch(openCreateModal(false));
      dispatch(tweetSuccess(false));
      showMessage({
        message: 'Success',
        description: 'Tweet created',
        type: 'success',
      });
    }

    if(error) {
      dispatch(setError(false))
      showMessage({
        message: "Error",
        description: "Api error conection",
        type: "danger",
      });
    }
  }, [tweeetSuccess,error]);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationStack />
      <CreateTweet />
      <FlashMessage icon={'auto'} position="bottom" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
