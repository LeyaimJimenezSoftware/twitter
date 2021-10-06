import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export const CustomButton = ({name, action, image, width}) => {
  return (
    <TouchableOpacity
      style={
        image ? styles.imageBtn : [styles.button, {width: width ? width : 100}]
      }
      onPress={() => {
        action();
      }}>
      {image ? (
        <Image
          resizeMode="contain"
          style={styles.tinyLogo}
          source={image}
        />
      ) : (
        <Text>{name}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 20,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    borderRadius: 100,
  },
  tinyLogo: {
    width: 25,
    height: 25,
  },
  imageBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
});
