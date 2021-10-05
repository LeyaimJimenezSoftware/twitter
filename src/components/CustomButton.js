import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export const CustomButton = ({name, action, image}) => {
  return (
    <TouchableOpacity
      style={image ? styles.imageBtn : styles.button}
      onPress={() => {
        action();
      }}>
      {image ? (
        <Image
          style={styles.tinyLogo}
          source={{
            uri: image,
          }}
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
    justifyContent: 'flex-end',
    width: 100,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 100,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  imageBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  }
});
