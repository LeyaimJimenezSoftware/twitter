import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg',
        }}
        resizeMode={'cover'}
      />
      <View style={{backgroundColor: 'red'}}>
        <Text style={styles.text}>Wizeline</Text>
      </View>
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
  },
  text: {
    color: 'white',
  },
  infoContainer: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
