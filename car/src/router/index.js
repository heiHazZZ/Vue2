import Vue from 'vue'
import VueRouter from 'vue-router'


const Maim = () => import ('../views/Main');
const Recycle = () => import ('../views/Recycle');


Vue.use(VueRouter)


const routes = [
  {path: '', redirect: '/main'},
  {path: '/main', component: Maim},
  {path: '/recycle', component: Recycle}
];


const router = new VueRouter({
  routes,
  mode: 'history'
});


export default router;
