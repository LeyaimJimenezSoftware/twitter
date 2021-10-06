import React, {useEffect} from 'react';
import {Modal, StyleSheet, Text, View, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CircleImage from './CircleImage';
import {CustomButton} from './CustomButton';
import {useData} from '../Hooks/useData';
import {postTweetAction, openCreateModal} from '../redux/actions/index';

const CreateTweet = () => {
  const {createModal} = useSelector(state => state?.twitterReducer);
  const dispatch = useDispatch();
  const [formValues, handleFormValueChange, setFormValues] = useData({
    tweet: '',
  });

  useEffect(() => {
    setFormValues({tweet: ''});
  }, [createModal]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={createModal}
      onRequestClose={() => {
        dispatch(openCreateModal(false))
        setFormValues({tweet: ''});
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.userOption}>
            <CircleImage
              url={
                'https://pbs.twimg.com/profile_images/1058467839370293248/OcHrsg9J_normal.jpg'
              }
            />
            <CustomButton
              image={require('../images/x-button.jpeg')}
              action={() => {
                dispatch(openCreateModal(false))
                setFormValues({tweet: ''});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <TextInput
              key={`tweet`}
              value={formValues.tweet}
              onChange={event =>
                handleFormValueChange('tweet', event.nativeEvent.text)
              }
              multiline={true}
              style={styles.textInputComment}
              placeholder={'Tweet'}
              maxLength={140}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <View style={styles.textPosition}>
              <Text>{`${formValues.tweet.length}/140`}</Text>
            </View>
            <View style={styles.btnPos}>
              <CustomButton
                name={'Tweet'}
                disabled={formValues.tweet.length >= 1}
                action={() => dispatch(postTweetAction(formValues.tweet))}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 35,
    height: '100%',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
  },
  userOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputComment: {
    height: 200,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
    fontSize: 16,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textContainer: {
    marginTop: 20,
  },
  btnPos: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textPosition: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
});

export default CreateTweet;
