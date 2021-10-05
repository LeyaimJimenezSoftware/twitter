import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

const CircleImage = ({url}) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: url,
      }}
      resizeMode={'cover'}
    />
  );
};

export default CircleImage;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderColor: '#1f2734',
    borderWidth: 2,
    borderRadius: 75,
  },
});
