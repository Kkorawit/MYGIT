import { createRouter,createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import ShowAllEvent from '../views/ShowAllEvent.vue';
import CreateEvent from '../views/CreateEvent.vue';
import CategoryEvent from '../views/CategoryEvent.vue';
import DateTimeEvent from '../views/DateTimeEvent.vue';

const history = createWebHistory()
const routes = [
    {
        path: '/' ,
        name: 'Home',
        component: Home
    },
    {
        path: '/show-all-event' ,
        name: 'ShowAllEvent',
        component: ShowAllEvent
    },
    {
        path: '/create-event' ,
        name: 'CreateEvent',
        component: CreateEvent
    },
    {
        path: '/show-category-event' ,
        name: 'CategoryEvent',
        component: CategoryEvent
    },
    {
        path: '/show-datetime-event' ,
        name: 'DateTimeEvent',
        component: DateTimeEvent
    }
]

const router = createRouter({history, routes})
export default router