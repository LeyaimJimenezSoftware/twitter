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
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
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
  },
});
