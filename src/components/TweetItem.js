import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CircleImage from './CircleImage';

const TweetItem = () => (
  <View style={styles.item}>
    <CircleImage
      url={
        'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg'
      }
    />
    <View style={styles.tweetinfo}>
      <Text style={styles.text}>@Wizeline</Text>
      <Text style={styles.title}>
        Que se cayeron Facebook, Instagram y WhatsApp? Perdón, no me enteré
        porque estaba leyendo Leyendas de Terror del maestro Carlos Trejo.
      </Text>
    </View>
  </View>
);

export default TweetItem;

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
  },
  tweetinfo: {
    marginHorizontal: 10,
    width: '85%',
  },
  text: {
    color: 'gray',
  },
});
