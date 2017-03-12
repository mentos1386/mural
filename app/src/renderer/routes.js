import WallpapersGrid from 'components/WallpapersGrid.vue';
import Home from 'components/Home.vue';
import Favorites from 'components/Favorites.vue';

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/wallpapers',
    name: 'wallpapers',
    component: WallpapersGrid,
  },
  { path: '/favorites', component: Favorites },
];
