import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

import AppHome from "./components/home/AppHome";
import AppCookies from "./components/AppCookies";
import AppPolicy from "./components/AppPolicy";
import AppTutorials from "./components/tutorials/AppTutorials";
import AppTechnical from "./components/technical/AppTechnical";
import AppRepairs from "./components/repairs/AppRepairs";
import AppMaintenance from "./components/maintenance/AppMaintenance";
import AppMailSuccess from "@/components/AppMailSuccess";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: AppHome},
        {path: '/cookies', component: AppCookies},
        {path: '/policy', component: AppPolicy},
        {path: '/tutorials', component: AppTutorials},
        {path: '/technical', component: AppTechnical},
        {path: '/repairs', component: AppRepairs},
        {path: '/maintenance', component: AppMaintenance},
        {path: '/success', component: AppMailSuccess}
    ]
})