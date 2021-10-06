const initialState = {
    user: null,
    tweets: null,
    tweeetSuccess: false,
    searchResult: null,
  };
  
  const twitterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER': {
        return {
          ...state,
          user: action.payload
        }
      }
      case 'ADD_TWEETS': {
        return {
          ...state,
          tweets: action.payload
        }
      }
      case 'TWEET_SUCCESS': {
        return {
          ...state,
          tweeetSuccess: action.payload
        }
      }
      case 'SEARCH_RESULT': {
        return {
          ...state,
          searchResult: action.payload
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default twitterReducer;