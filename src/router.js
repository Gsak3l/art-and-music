import {createRouter, createWebHistory} from "vue-router/dist/vue-router";

import AppHome from "@/pages/AppHome";
import AppCookies from "@/pages/AppCookies";
import AppPolicy from "@/pages/AppPolicy";
import AppTutorials from "@/pages/AppTutorials";
import AppTechnical from "@/pages/AppTechnical";
import AppRepairs from "@/pages/AppRepairs";
import AppMaintenance from "@/pages/AppMaintenance";
import AppMailSuccess from "@/pages/AppMailSuccess";
import AppTerms from "@/pages/AppTerms";
import AppError404 from "@/pages/AppError404";


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
        {path: '/mail-sent', component: AppMailSuccess},
        {path: '/terms', component: AppTerms},
        {path: '/:pathMatch(.*)*', component: AppError404},
    ]
})