// 该文件专门用于创建整个应用的路由器
import vueRouter from 'vue-router'
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detile from '../pages/Detile'

// 创建并暴露一个路由器
const router = new vueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detile',
                            component:Detile,
                            meta:{isAuth:true,title:'详情'},
                            
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

// 创建全局前置路由守卫
// beforeEach()在每次路由切换之前和初始化时调用
router.beforeEach((to,from,next) => {
    console.log('前置守卫',from,to);
    if(to.meta.isAuth) {
        if(localStorage.getItem('school') === 'atguigu') {
            next()
        } else{
            alert('您不隶属尚硅谷学校，无权查看')
        }
    } else{
        next()
    }
})

// 全局后置路由守卫
router.afterEach((to,from) => {
    console.log('后置守卫',from,to);
    document.title = to.meta.title || '硅谷系统'
})

export default router