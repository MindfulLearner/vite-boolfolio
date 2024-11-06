import { createRouter, createWebHistory } from 'vue-router';

//home
import AppHeader from './components/AppHeader.vue';
//cardlist
import CardList from './pages/CardList.vue';
//showcard
import ShowCard from './pages/ShowCard.vue';
//notfound
import NotFound from './pages/NotFound.vue';

const routes =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppHeader },
    { path: '/cardlist', component: CardList },
    { path: '/showcard/:slug', name: 'showcard', component: ShowCard },
    { path: '/:pathMatch(.*)*', component: NotFound },
   ],
});

export default routes;