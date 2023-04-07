import HomePage from '../src/components/HomePage.vue'

export const routes = [
    { path:'/',redirect: HomePage },
    { path:'/HomePage', component: HomePage }
]