import reqwest from 'reqwest';

const API_URL = 'https://api.imgur.com/';
const API_VERSION = '3';

const getApiUrl = () => `${API_URL}/${API_VERSION}`;

/**
 * Get Subreddit Gallery
 * @return {Promise}
 */
function getSubredditGallery(subreddit) {
  return reqwest({
    url: `${getApiUrl()}/gallery/r/${subreddit}`,
    type: 'json',
  });
}


export { getSubredditGallery };
