import { createRouter, createWebHistory } from 'vue-router';

//home
import AppHeader from './components/AppHeader.vue';
//cardlist
import CardList from './pages/CardList.vue';
//showcard
import ShowCard from './pages/ShowCard.vue';

const routes =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppHeader },
    { path: '/cardlist', component: CardList },
    { path: '/showcard/:id', name: 'swagger', component: ShowCard },
   ],
});

export default routes;