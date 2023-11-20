import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import DocView from "../views/DocView.vue"
import ExerciseView from "../views/ExerciseView.vue"
/* ------------------------------------------------- */



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/documentation",
            name: "documentation",
            component: DocView
        },
        {
            path: "/exercise",
            name: "exercise",
            component: ExerciseView
        }
    ]
})

export default router