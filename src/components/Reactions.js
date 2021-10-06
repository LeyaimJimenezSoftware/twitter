import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export const Reactions = ({images, count}) => {
    return (
      <View style={styles.reaction}>
        <Image style={styles.tinyLogo} source={images} />
        <Text style={styles.textReaction}>{count}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    tinyLogo: {
      width: 20,
      height: 20,
      marginRight: 5,
    },
    reaction: {
      flexDirection: 'row',
      marginVertical: 10,
      marginRight: 10,
    },
    textReaction: {
      fontSize: 12,
      color: 'gray',
      marginTop: 1,
    },
  });
  