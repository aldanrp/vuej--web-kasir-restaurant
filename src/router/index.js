import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import foods from '../views/foods.vue';
import FoodDetails from '../views/FoodDetails.vue';
import Keranjang from '../views/Keranjang.vue';
import pesananSukses from '../views/pesananSukses.vue';
import Inform from '../views/Informasi.vue';
import Login from "../views/Login.vue";

Vue.use( VueRouter );

const routes = [ {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/foods',
        name: 'foods',
        component: foods
    },
    {
        path: '/foods/:id',
        name: 'FoodDetails',
        component: FoodDetails
    },
    {
        path: '/Inform/:id',
        name: 'Inform',
        component: Inform
    },
    {
        path: '/keranjang',
        name: 'Keranjang',
        component: Keranjang
    },
    {
        path: '/pesananSukses',
        name: 'pesananSukses',
        component: pesananSukses
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue' )
    }
];

const router = new VueRouter( {
    routes
} );

export default router;