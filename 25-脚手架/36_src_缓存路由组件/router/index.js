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
            name:'guanyu',
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
                            name:'xiangqing',
                            path:'detile',
                            component:Detile,
                            
                            // props第一种写法：值为对象，该对象中所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'}

                            // props第二种写法：值为布尔值，若布尔值为真，就会把该路由组件收到的params参数，以props形式传给Detail组件
                            // props:true

                            // props第三种写法：值为函数
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})