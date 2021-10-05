import axios from 'axios';

export default {
  getUser: async () => {
    return axios.get('https://fake-twitter-api-w5dmexv5jq-uc.a.run.app/api/user');
  },
  getLastTweets: async () => {
    return axios.get('https://fake-twitter-api-w5dmexv5jq-uc.a.run.app/api/statuses/user_timeline');
  },
};
