import reqwest from 'reqwest';

const API_URL = 'https://api.desktoppr.co';
const API_VERSION = '1';

const getApiUrl = () => `${API_URL}/${API_VERSION}`;

/**
 * Get All Wallpapers from dekstopper
 * @param {Number} page Page
 * @return {Promise}
 */
function getAllWallpapers(page = 1) {
  return reqwest({
    url: `${getApiUrl()}/wallpapers?page=${page}`,
  });
}

/**
 * Get Random Wallpapers from dekstopper
 * @return {Promise}
 */
function getRandomWallpapers() {
  return reqwest({
    url: `${getApiUrl()}/wallpapers/random`,
    type: 'json',
  });
}


export { getAllWallpapers, getRandomWallpapers };
