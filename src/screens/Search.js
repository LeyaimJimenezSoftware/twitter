import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const Search = () => {
  const {user, tweets} = useSelector(state => state?.twitterReducer);
  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
