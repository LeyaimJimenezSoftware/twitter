const initialState = {
    user: null,
    tweets: null,
    tweeetSuccess: false,
    searchResult: null,
    createModal: false,
    error: false,
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
      case 'OPEN_MODAL': {
        return {
          ...state,
          createModal: action.payload
        }
      }
      case 'SET_ERROR': {
        return {
          ...state,
          error: action.payload
        }
      }
      default: {
        return state;
      }
    }
  };
  
  export default twitterReducer;