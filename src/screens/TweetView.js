import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import CircleImage from '../components/CircleImage';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0

const ShareComment = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}
      >
      <View style={{alignItems: 'flex-end'}}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textPosition}>
        <TextInput
          key={`Comment`}
          style={styles.textInputComment}
          placeholder={'Tweet your reply'}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

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

      <ShareComment />
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
  textInputComment: {
    height: 40,
    borderWidth: 1,
    width: '90%',
    padding: 10,
    fontSize: 16,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    minWidth: '80%',
    backgroundColor: 'white',
  },
  textPosition: {
    alignItems: 'center',
  },
  button: {
    margin: 20,
    justifyContent: 'flex-end',
    width: 100,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 100,
  },
});

export default TweetView;
