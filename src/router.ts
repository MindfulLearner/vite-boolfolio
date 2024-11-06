import { createRouter, createWebHistory } from 'vue-router';

//home
import AppHeader from './pages/AppHeader.vue';
//cardlist
import CardList from './pages/CardList.vue';

const routes =  createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AppHeader },
    { path: '/cardlist', component: CardList },
   ],
});

export default routes;