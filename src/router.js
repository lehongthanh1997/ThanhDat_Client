import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tour from './views/Tour.vue'
import TourSingle from './views/TourSingle.vue'
import CarSingle from './views/CarSingle.vue'
import Hotel from './views/Hotel.vue'
import Car from './views/Car.vue'
import Flight from './views/Flight.vue'
import Contact from './views/Contact.vue'
import About from './views/About.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Account from './views/Account.vue'
import NotFound from './views/NotFound.vue'

import Admin from './views/admin/Admin.vue'
import Dashboard from './views/admin/Dashboard.vue'
import Create from './views/admin/Create.vue'
import List from './views/admin/List.vue'
import Order from './views/admin/Order.vue'
import Edit from './views/admin/Edit.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/tour',
            name: 'tour',
            component: Tour
        },
        {
            path: '/tour/:id',
            name: 'tour-single',
            component: TourSingle
        },
        {
            path: '/hotel',
            name: 'hotel',
            component: Hotel
        },
        {
            path: '/car',
            name: 'car',
            component: Car
        },
        {
            path: '/car/:id',
            name: 'car-single',
            component: CarSingle
        },
        {
            path: '/flight',
            name: 'flight',
            component: Flight
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/account',
            name: 'account',
            component: Account
        },
        {
            path: '/admin',
            name: 'admin',
            component: Admin,
            children: [
                {
                    path: 'dashboard',
                    component: Dashboard,
                },
                {
                    path: 'create',
                    component: Create,
                },
                {
                    path: 'create/:id',
                    component: Create,
                },
                {
                    path: 'list',
                    component: List,
                },
                {
                    path: 'list/:id',
                    component: List,
                },
                {
                    path: 'edit/:id/:edit_id',
                    component: Edit,
                },
                {
                    path: 'order',
                    component: Order,
                },
                {
                    path: 'order/:id',
                    component: Order,
                },
                {
                    path: '*',
                    component: NotFound
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});
