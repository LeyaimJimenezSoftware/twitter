import data from '../../services/index';

export const addUser = user => ({
  type: 'ADD_USER',
  payload: user,
});

export const getUserData = () => {
  return async dispatch => {
    try {
      const res = await data.getUser();
      dispatch(addUser(res.data));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const addTweets = data => ({
  type: 'ADD_TWEETS',
  payload: data,
});

export const getUserTweets = () => {
  return async dispatch => {
    try {
      const res = await data.getLastTweets();
      dispatch(addTweets(res.data));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const tweetSuccess = data => ({
  type: 'TWEET_SUCCESS',
  payload: data,
});

export const postTweetAction = value => {
  return async dispatch => {
    try {
      const res = await data.postTweet(value);
      if (res.status === 201) {
        dispatch(getUserTweets());
        dispatch(tweetSuccess(true));
      }
    } catch (err) {
      console.log('error', err);
    }
  };
};

export const searchResult = data => ({
    type: 'SEARCH_RESULT',
    payload: data,
  });  

export const searchTweet = query => {
    return async dispatch => {
      try {
        const res = await data.searchTweet(query);
        // if (res.status === 201) {
        //   dispatch(getUserTweets());
        //   dispatch(tweetSuccess(true));
        // }
      } catch (err) {
        console.log('error', err);
      }
    };
  };
  