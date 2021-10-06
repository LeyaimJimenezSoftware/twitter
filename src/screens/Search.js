import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import {CustomButton} from '../components/CustomButton';
import {useSelector, useDispatch} from 'react-redux';
import {searchTweet, openCreateModal} from '../redux/actions/index';
import TweetList from '../components/TweetList';

const Search = ({navigation}) => {
  const {searchResult} = useSelector(state => state?.twitterReducer);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const hashtags = [
    '#wizeline',
    '#pop',
    '#js',
    '#react',
    '#helloword',
    '#pokemon',
    '#nintendo',
    '#architect',
  ];
  const [filterHashtags, setFilterHashtags] = useState(hashtags);

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={{width: '15%'}}>
          <CustomButton
            image={require('../images/arrow.png')}
            action={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            key={`Comment`}
            style={styles.textInputComment}
            placeholder="Search"
            onChangeText={text => {
              setText(text);
              setFilterHashtags(
                hashtags.filter(name =>
                  name.toUpperCase().includes(text.toUpperCase()),
                ),
              );
            }}
            defaultValue={text}
            onSubmitEditing={() => {
              setFilterHashtags([]);
              dispatch(searchTweet(text));
            }}
          />
        </View>
        <CustomButton
          name={'+'}
          action={() => {
            dispatch(openCreateModal(true));
          }}
          width={50}
        />
      </View>
      {searchResult ? (
        <TweetList tweets={searchResult} />
      ) : (
        <Text style={styles.textFound}>No found</Text>
      )}
      <View style={{position: 'absolute', width: '100%', top: 55}}>
        {filterHashtags.map(name => {
          return (
            <TouchableOpacity
              onPress={() => {
                setFilterHashtags([]);
                setText(name);
              }}
              style={styles.searchOptions}>
              <Text>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputComment: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchOptions: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '70%',
    padding: 10,
    left: 0,
  },
  textFound: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
  },
});

export default Search;
