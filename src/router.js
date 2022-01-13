import { createRouter, createWebHistory } from 'vue-router'
import DcHeros from './pages/DcHeros'
import Calender from './pages/Calender'
import Markdown from './pages/Markdown'
import Home from './pages/Home'
import Slider from './pages/Slider'
import Calculator from './pages/Calculator'
import ReuseableModal from './pages/ReuseableModal'
import Chat from './pages/Chat'
import store from './store/index'
import UserCrud from './pages/UserCrud'
import TensorFlow from './pages/TensorFlow'

const routes = [
    { path: '/markdown', component: Markdown },
    { path: '/', component: Home },
    { path: '/dc-heros', component: DcHeros },
    { path: '/calender', component: Calender },
    { path: '/slider', component: Slider },
    { path: '/calculator', component: Calculator },
    { path: '/reuseable-modal', component: ReuseableModal },
    {
        path: '/chat',
        component: Chat,
        meta: { middleware: 'auth' },

    },
    {
        path: '/user-crud',
        component: UserCrud,
        // meta: { middleware: 'auth' },

    },
    {
        path: '/tensorflow',
        component: TensorFlow
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        //   console.log(to.meta.middleware)
        const middleware = require(`./middleware/${to.meta.middleware}`)
        if (middleware) {
            middleware.default(next, store);
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;