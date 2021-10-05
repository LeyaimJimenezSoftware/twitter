import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CircleImage from './CircleImage';
import { CustomButton } from './CustomButton';

const UserInfo = () => {
  return (
    <View style={styles.container}>
      <CircleImage
        url={
          'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg'
        }
      />
      <View style={{backgroundColor: 'red'}}>
        <Text style={styles.text}>Wizeline</Text>
      </View>
      <CustomButton name={'+'} action={()=>{}} />
    </View>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkblue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
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
