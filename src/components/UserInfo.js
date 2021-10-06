import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import CircleImage from './CircleImage';
import {CustomButton} from './CustomButton';
import CreateTweet from './CreateTweet';
import {tweetSuccess} from '../redux/actions/index';
import * as RootNavigation from '../navigation/RootNavigation';

const UserInfo = () => {
  const [createTweet, setCreateTweet] = useState(false);
  const dispatch = useDispatch();
  const {
    tweeetSuccess,
    user: {
      profile_image_url_https,
      profile_background_image_url_https,
      description,
      screen_name,
      profile_background_color,
    },
  } = useSelector(state => state?.twitterReducer);

  const openCreateTweet = value => {
    setCreateTweet(value);
  };

  useEffect(() => {
    if (tweeetSuccess) {
      openCreateTweet(false);
      dispatch(tweetSuccess(false));
      showMessage({
        message: 'Success',
        description: 'Tweet created',
        type: 'success',
      });
    }
  }, [tweeetSuccess]);

  return (
    <ImageBackground
      source={{uri: profile_background_image_url_https}}
      imageStyle={{opacity: 0.5}}
      resizeMode="cover"
      style={[styles.container, {backgroundColor: 'red'}]}>
      <CircleImage url={profile_image_url_https} />
      <Text style={styles.text}>{screen_name}</Text>
      <Text style={styles.text}>{description}</Text>
      <View style={styles.btnPosition}>
        <View style={styles.btn}>
          <CustomButton
            name={'Search'}
            action={() => RootNavigation.navigate('Search')}
            width={80}
          />
          <CustomButton
            name={'+'}
            action={() => openCreateTweet(true)}
            width={50}
          />
        </View>
        <CustomButton name={'Setting'} action={() => {}} width={70} />
      </View>
      <CreateTweet
        createTweet={createTweet}
        openCreateTweet={openCreateTweet}
      />
    </ImageBackground>
  );
};

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 2,
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
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 150,
  },
  btnPosition: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
