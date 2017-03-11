import WallpapersGrid from 'components/WallpapersGrid.vue';
import Favorites from 'components/Favorites.vue';

export default [
  {
    path: '/home/:page?',
    name: 'home',
    component: WallpapersGrid,
  },
  {
    path: '/',
    redirect: '/home',
  },
  { path: '/favorites', component: Favorites },
];
