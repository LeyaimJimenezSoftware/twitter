import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CircleImage from '../components/CircleImage';
import ShareAndComment from '../components/Share';

const TweetView = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.userDataContainer}>
          <CircleImage
            url={
              'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg'
            }
          />
          <View style={styles.textInfo}>
            <Text>Wizeline</Text>
            <Text>@Wizeline</Text>
          </View>
        </View>

        <View style={styles.textInfo}>
          <Text>
            Que se cayeron Facebook, Instagram y WhatsApp? Perdón, no me enteré
            porque estaba leyendo Leyendas de Terror del maestro Carlos Trejo.
          </Text>
        </View>
      </View>

      <ShareAndComment />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  userDataContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
  },
  textInfo: {
    marginLeft: 20,
    marginVertical: 10,
    justifyContent: 'center',
  },
});

export default TweetView;
