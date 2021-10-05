import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {CustomButton} from '../components/CustomButton';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 100 : 0;

const ShareAndComment = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      <View style={{alignItems: 'flex-end'}}>
        <CustomButton name={'Share'} action={() => {}} />
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

const styles = StyleSheet.create({
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
});

export default ShareAndComment;
