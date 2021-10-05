import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  FlatList,
  View,
  Dimensions,
} from 'react-native';
import {Line} from './Line';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Image
      style={styles.image}
      source={{
        uri: 'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg',
      }}
      resizeMode={'cover'}
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

const TweetList = () => {
  const renderItem = ({item}) => (
    <>
      <Item title={item.title} />
      <Line></Line>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TweetList;

const styles = StyleSheet.create({
  container: {
    color: 'white',
    flex: 1,
  },
  item: {
    padding: 5,
    marginVertical: 5,
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 12,
  },
  image: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
  },
  tweetinfo: {
    marginHorizontal: 10,
    width: '85%',
  },
  text: {
    color: 'gray',
  },
});
