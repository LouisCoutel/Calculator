import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import SearchView from "../views/SearchView.vue"
import TimelineView from "../views/TimelineView.vue"
import CancelButton from "../components/search/buttons/CancelButton.vue"
import LoaderView from "../views/LoaderView.vue"
import AddButton from "../components/cards/cardSubcomponents/AddButton.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            redirect: "/timeline",
            component: HomeView,
            children: [
                {
                    path: "/timeline",
                    name: "timeline",
                    component: TimelineView,
                },
                {
                    path: "/load",
                    name: "load",
                    component: LoaderView,
                },
                {
                    path: "/search",
                    name: "search",
                    components: { default: SearchView, cancelbutton: CancelButton, addbutton: AddButton },
                },
            ],
        },
    ],
})

export default router
