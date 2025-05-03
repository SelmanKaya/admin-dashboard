import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home2 from '../components/Home2.vue';
import CustomerOrEngineer from '../components/CustomerLogin.vue';
import EngineerLogin from '../components/EngineerLogin.vue';
// Yer tutucu bileşen (gerçek projede ilgili bileşenleri oluşturun)
const Placeholder = { template: '<div>Rota Sayfası</div>' };

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2,
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: '/spreadsheet',
    name : "Sheet",
    component :() => import('../components/spreadsheet.vue')
  },
  {
    path: '/CustomerLogin',
    name: 'Customer',
    component: () => import('../components/CustomerLogin.vue')
  },
  {
    path: '/EngineerLogin',
    name: 'Engineer',
    component :() => import('../components/EngineerLogin.vue')
  },
  {
    path: '/AskPage',
    name: 'AskPage',
    component: () => import('../components/AskPage.vue')
  },
  {
    path: '/dosya-havuzu',
    name: 'FileRepository',
    component: Placeholder,
  },
  {
    path: '/projeler',
    name: 'Projects',
    component: Placeholder,
  },
  {
    path: '/formlar',
    name: 'Forms',
    component: Placeholder,
  },
  {
    path: '/policeler',
    name: 'Policies',
    component: Placeholder,
  },
  {
    path: '/hesap-islemleri',
    name: 'AccountOperations',
    component: Placeholder,
  },
  {
    path: '/kullanicilar',
    name: 'Users',
    component: Placeholder,
  },
  {
    path: '/raporlar',
    name: 'Reports',
    component: Placeholder,
  },
  {
    path: '/abone-sorgulama',
    name: 'SubscriberQuery',
    component: Placeholder,
  },
  {
    path: '/e-imza',
    name: 'ESignature',
    component: Placeholder,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;