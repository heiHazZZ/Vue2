// 该文件专门用于创建整个应用的路由器
import vueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detile from '../pages/Detile'

// 创建并暴露一个路由器
export default new vueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            path:'detile',
                            component:Detile
                        }
                    ]
                }
            ]
        }
    ]
})