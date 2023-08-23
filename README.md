# 笔记

## 关于不同版本的vue：
	1.vue.js 与 vue.runtime.xxx的区别：
	    (1)vue.js是完整版的vue，包含：核心功能+模板解析器
	    (2)vue.runtime.xxx.js是运行版本的vue，只包含：核心功能，没有模板解析器
	2.因为vue。runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
	    render函数收到的createElement函数去指定具体内容

## vue.config.js配置文件：
    使用vue.inspect > output.js 可以查看vue脚手架的默认配置
    使用vue.config.js可以对脚手架进行个性化定制，详情见：http://cli.vue.org/zh

## ref属性
	1.被用来给元素或子组件注册引用信息(id的替代者)
	2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象(vc)
	3.使用方法：
		打标识：<h1 ref="xxx">......</h1> 或 <SchoolName ref="xx"></SchoolName>
		获取：this.$refs.xxx

## 配置项props
	功能:让组件接收外部传过来的数据
		(1)传递数据：
			<Demo name="xxx"/>
		(2)接收数据：
			第一种方式（只接收）：
				props:['name']
			第二种方式（限制类）：
				props:{
					name:String
				}
			第三种方式（限制类型、限制必要性、指定默认值）：
				props：{
					name：{
						type:String, // 类型
						required:true, // 必要性
						default:'老王' // ，，默认值
					}
				}
	备注：props是只读，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
	若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据。

## mixin(混入/混合)
	功能：可以把多个组件共用的配置提取成一个混入对象
	使用方法：
		第一步：定义混合，例如：
			{
				data(){...}
				methods:{...}
				...
			}
		第二部：使用混合，例如：
			(1)全局混入：Vue.mixin(xxx)
			(2)局部混入：mixins:[xxx,yyy,...]

## 插件
	功能：用于增强Vue
	本质：包含install方法的一个对象，install的第一个参数是Vue，第二个以后的参数是插件使用者传递的数据
	定义插件：
		对象.install = function(Vue,options) {
			// 1. 添加全局过滤器
			Vue.filter(...)
	
			// 2. 添加全局指令
			vue.directive(...)
	
			// 3. 配置全局混入（混合）
			Vue.mixin(...)
	
			// 4. 添加实例方法
			Vue.prototype.$myMethod = function(){...}
			Vue.prototype.$myPrototype = xxx
		}
		使用插件：Vue.use()

## scoped样式
	作用：让样式在局部内生效，防止冲突
	写法：<style scoped></style>

## 总结TodoList案例
	1.组件化编码流程：
		(1)拆分静态组件：组件要按照功能点差分，命名不要与html元素冲突。
		(2)实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用：
			1)一个组件在用：放在组件的自身即可。
			2)一些组件在用：放在它们的父组件上（状态提升）。
		(3)实现交互：从绑定事件开始。
	
	2.props适用于：
		(1)父组件 ==> 子组件 通信
		(2)子组件 ==> 父组件 通信（要求父先给子一个函数）
	
	3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可以修改的！
	
	4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做。

## WebStorage(本地存储)
	1.存储内容大小一般支持5MB左右（不同浏览器可能还不一样）
	2.浏览器端通过Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制
	3.相关API：
		(1)xxxxxStorage.setItem('key','value');
			该方法接受一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其相对应的值
		(2)xxxxxStorage.getItem('person');
			该方法接受一个键名作为参数，返回键名对应的值
		(3)xxxxxStorage.removeItem('key');
			该方法接受一个键名作为参数，并把该键名从存储中和删除
		(4)xxxxx.Storage.clear()
			该方法会清空存储中的所有数据
	4.备注：
		(1)SessionStorage存储的内容会随着浏览器窗口关闭而消失
		(2)LoaclStorage存储的内容，需要手动清除才会消失
		(3)xxxxxStorage.getItem(xxx)，如果xxx对应的value获取不到，那么getItem返回值是null
		(4)JSON.parse(null)的结果依然是null

## 组件的自定义事件
	1.一种组件间通信的方式，适用于：子组件 ===> 父组件
	
	2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）
	
	3.绑定自定义事件：
		(1)第一种方式：在父组件中：<Demo @atguigu="test" /> 或 <Demo v-on:atguigu="test">
		(2)第二种方式，在父组件中：
			<Demo ref="demo" />
			......
			mounted(){
				this.$refs.xxx.$on('atguigu',this.test)
			}
		(3)若想让自定义事件只能触发一次，可以使用once修饰符，或$once方法
	
	4.触发自定义事件：this.$emit('ayguigu',数据)
	
	5.解绑自定事件：this.$off('atguigu')
	
	6.组件上也可以绑定原生DOM事件，需要用native修饰符
	
	7.注意：通过this.$refs.xxx.$on('atguigu',回调)绑定自定义事件，回调要么配置在methods中，要么用箭头函数，否则this指向会出问题！

## 全局事件总线（GlobaEventBus）
```vue
1.一种组件间的通信方式，适用于任意组件间通信

2.安装全局事件总线：
	new Vue({
		......
		beforeCreate(){
			Vue.prototype.$bus = this  // 安装全局事件总线，$bus就是当前应用的vm
		},
		......
	})

3.使用事件总线：
	(1)接收数据：A组件想接收数据，则在A组件中给$bus绑定自定义事件，事件的回调留在A组件自身
		methods(){
			demo(data){
				......
			}
		}
		.....
		mounted(){
			this.$bus.$on('xxx',this.demo)
		}
		或者
		mounted(){
			this.$bus.$on('xxx',() => {})   // 直接写回调的话，要用箭头函数
		}
	(2)提供数据：this.$bus.$emit('hello',数据)

4.最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件
```

## 消息订阅与发布（pubsub）
```vue
1.一种组件间的通信方式，适用于任意组件间通信

2.使用步骤：
	(1)安装pubsub:npm i pubsub-js
	(2)引入：import pubsub from 'pubsub-js'

3.接受数据：A组件想接受数据，则在A组件中订阅消息，订阅的回调留在A组件自身
	methods(){
		demo(msgName,data){
			......
		}
		......
		mounted(){
			this.pid =pubsub.subscribe('xxx',this.demo)  // 订阅消息
		}
	}

4.提供数据：pubsub.publish('xxx',数据)

5.最好在beforeDestory钩子中，用pubsub.unsubscribe(pid)去取消订阅
```

## nextTick
	1.语法：this.$nextTick(回调函数)
	2.作用：在下一次DOM更新结束后再执行其指定的回调
	3.什么时候：当改变数据后，要基于更新后的新DOM进行某些操作时，要在nextTick所指定的回调中执行

## Vue封装的过度与动画

1.作用：在插入、更新或移除DOM元素时，在适合的时候给元素添加样式类名
2.图示：![](../../../../../Program Files (x86)/typora/img/transition.png)


```vue
3.写法：
	(1)准备好样式：
		元素的进入样式：
			v-enter:进入的起点
			v-enter-active:进入的过程
			v-enter-to:进入的终点
		元素的离开样式：
			v-leave:离开的样式
			v-leave-active:离开的过程
			v-leave-to：离开的终点
	(2)使用transition包裹要过渡的元素，并配置name属性：
		<transition name="hello">
			<h1 v-show="isShow">你好啊！</h1>
		</transition>
	(3)备注：若有多个元素要过渡，则需要使用：<transition-group>,且每个元素都要指定key值
```

## Vue脚手架配置代理
```vue
方法一:
	在vue.config.js中添加配置:
	devServer:{
		proxy:"http://localhost:5000"
	}

说明:
	1.优点:配置简单,请求资源时直接发给前端(8080)即可
	2.缺点:不能配置多个代理,不能灵活的控制请求是否代理
	3.工作方式:若按照上述配置代理,当请求了前端不存在的资源时,那么该请求会转发给服务器(优先匹配前端资源)
```


```vue
方法二:
	编写vue.config.js配置具体代理规则:
		model.exports = {
			devServer:{
				proxy:{
					'/api': {  // 匹配所有以api开头的请求路径
    					target: 'http://localhost:5000',  // 代理目标的基础路径
    					pathRewrite:{'/atguigu/':''}, // 向5000发动请求时,把/api替换成空
    					ws: true,  // 用于支持websocket
    					changeOrigin: true  // 用于控制请求头中的host值
					},
					'/api2': {  // 匹配所有以api开头的请求路径
    					target: 'http://localhost:5001',  // 代理目标的基础路径
    					pathRewrite:{'/api2/':''}, // 向5000发动请求时,把/api替换成空
    					ws: true,  // 用于支持websocket
    					changeOrigin: true  // 用于控制请求头中的host值
					},
				}
			}
		}
	/*
		changeOrigin设置为true,服务器收到的请求头中的host为，localhost:5000
		changeOrigin设置为false时，服务器接收的请求头中的host为，loaclhost：8080
		changeOrigin默认值为true
	*/
```
## 插槽

1.作用：让父组件可以向子组件指定的位置插入html结构，也是一种组件间的通信方式，适用于 父组件 ===>子组件

2.分类：默认插槽、具名插槽、作用域插槽

3.使用方式：

​	（1）默认插槽：

```html
		父组件中：

​				<Category>
					<div>html结构</div>
				</Category>
		子组件中：
				<template>
					<div>
						<!--定义插槽-->
						<slot>插槽默认内容</slot>
					</div>
				</template>
```

（2）具名插槽：

```html
			父组件中：
					<Category>
						<template slot="center">
							<div>html结构1<div>
						</template>
					</Category>
					
					<Category>
						<template v-slot:footer>
							<div>html结构2<div>
						</template>
					</Category>
			子组件中：
					<template>
                        <div>
                            <!--定义插槽-->
                            <slot name="center">插槽默认内容</slot>
                            <slot name="footer">插槽默认内容</slot>
                        </div>
					</template>
```

4.作用域插槽：

​		（1）理解：数据在组建的自身，但根据数据生成的结构需要组件的使用者来决定。（games数据在Catefory组件中，但使用数据所遍历出来的结构由APP组件决定）

​		（2）具体编码：

```javascript
		父组件中：
				<Category title="游戏">
					<template scope="scopeData">
						<!-- 生产的是ul列表 -->
						<ul>
							<li v-for="(item,index) in scopeData.games" :key="index">{{item}}</li>
						</ul>
					</template>
				</Category>
				
				<Category title="游戏">
					<template sloy-scope="{game}">
						<!-- 生产的是h4标题 -->
						<h4 v-for="(item,index) in game" :key="index">{{item}}</h4>
					</template>
				</Category>
		子组件中：
				<template>
                    <div>
                    	<h3>{{title}}分类</h3>
                        <slot :games="games">插槽默认内容</slot>
                    </div>
				</template>
				
				<script>
					export default {
						name:'Catepory',
						props:['title'],
						// 数据在子组件自身
						data() {
							return {
								games:['红色警戒','穿越火线','劲舞团','超级玛丽']
							}
						},
					}
				</script>
```

## Vuex

### 	1.概念

​				在vue中实现集中式状态（数据）管理的一个vue插件，对vue应用中多个组件的共享状态进行集中式的管理，也是一种组件间通信的方式，且适用于任意组件间通信。

### 	2.何时使用

​				多个组件需要共享数据时

### 	3.搭建vuex环境

​			（1）创建文件：src/store/index.js

```javascript
		// 该文件用于创建Vuex中最为核心的store
		// 引入Vue核心库
        import Vue from 'vue'
        // 引入Vuex
        import Vuex from 'vuex'
        // 应用Vuex插件
        Vue.use(Vuex)

        // 准备actions——用于响应组件中的动作
        const actions = {}
        // 准备mutations——用于操作数据
        const mutations = {}
        // 准备state——用于存储数据
        const state = {}

        // 创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })
```

​			（2）在main.js中创建vm时传入store配置项

```javascript
		......
        // 引入store
        import store from './store'
		......
        
        // 创建vm
        new Vue({
            al:'#app',
            render:h => h(app),
            store
        })
```

### 	4.原理图

![](https://vuex.vuejs.org/vuex.png)

### 		5.基本使用

​				（1）初始化数据，配置actions、配置mutations、操作文件store.js

```javascript
		// 该文件用于创建Vuex中最为核心的store
        import Vue from 'vue'
        // 引入Vuex
        import Vuex from 'vuex'
        // 应用Vuex插件
        Vue.use(Vuex)

        // 准备actions——用于响应组件中的动作
        const actions = {
            jia(context,value){
                console.log('actions中的jia被调用了',context,value);
                context.commit('JIA',value)
            }
           
        }
        
        // 准备mutations——用于操作数据
        const mutations = {
            // 执行加
            JIA(state,value){
                console.log('mutations中的JIA被调用了',state,value);
                state.sum += value
            }
        }
        
        // 准备state——用于存储数据
        const state = {
            sum:0,
        }

        // 创建并暴露store
        export default new Vuex.Store({
            actions,
            mutations,
            state,
        })
```

​				（2）组件中读取vuex中的数据：$store.state.sum

​				（3）组件中修改vuex中的数据：$store.dispath（'action中的方法名'，数据）或 $store.commit（'mutations中的方法名'，数据）

​					备注：若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispath，直接编写commit

### 		6.getters的基本使用

​				（1）概念：当state中的数据需要经过加工后再使用时，可以使用getters加工

​				（2）在store.js中追加getters配置

```javascript
		......
		const getters = {
            bigSum(state){
                return state.sum * 10
            }
        }

		// 创建并暴露store
		export default new Vuex.store({
            ......
            getters
        })
```

​				（3）组件中读取数据：$store.getters.bigSum

### 	7.四个map方法的使用

​				（1）mapState方法：用于帮助我们映射state中的数据为计算属性

```javascript
		computed:{
			// 借助mapState生成计算属性，从state中读取数据（对象写法）
      		// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

      		// 借助mapState生成计算属性，从state中读取数据（数组写法）
      		// 数组写法只能使用state里数据的原名，不能像对象写法一样改名
      		...mapState(['sum','school','subject']),
		}
```

​				（2）mapGetters方法：用于帮助我们映射getters中的数据为计算属性

```
		computed：{
			// 借助mapGetters生成计算属性，从getters中读取数据（对象写法）
      		// ...mapGetters({bigSum:'bigSum'})
      		// 借助mapGetters生成计算属性，从getters中读取数据（数组写法）
      		...mapGetters(['bigSum'])
		}
```

​			  （3）mapActions方法：用于帮助我们生成与actions对话的方法，即包含$store.dispath(xxx)的函数

```javascript
		methods:{
           // 借助mapActions生成对应方法，方法中会调用dispath去联系actions （对象写法）
           ...mapActions({incrementOdd:'odd',incrementWait:'wait'})
           // 借助mapActions生成对应方法，方法中会调用dispath去联系actions （数组写法）
           // ...mapActions(['odd','wait'])
	   }
```

​            （4）mapMutations方法：用于帮助我们生成与mutations对话方法，即包含$store.commit(xxx)的函数

```javascript
		methods:{
			// 借助mapMutations生成对应方法，方法中会调用commit去联系mutations （对象写法）
            ...mapMutations({increment:'JIA',decrement:'JIAN'}),
            // 借助mapMutations生成对应方法，方法中会调用commit去联系mutations （数组写法）
            //  ...mapMutations(['JIA','JIAN'])
		}
```

### 8.模块化+命名空间

​			（1）目的：让代码更好维护，让多种数据分类更加明确。

​			（2）修改 store.js

```javascript
		const countAbout = {
            namespaced:true, // 开启命名空间
            state:{x:1},
            mutation:{...},
            action:{...},
            getters:{
                bigSum(state){
                    return state.sum * 10
                }
            }
        }
        const personAbout = {
            namespace:true,
            state:{...},
            mutation:{...},
            actions:{...}
        }
        
        cosnt store = new Vuex.Store({
            moudles:{
              countAbout,
              personAbout
            }
        })
```

​			（3）开启命名空间后，组件中读取state数据：

```javascript
		// 方式一：自己直接读取
		this.$store.state.personAbout.list
		// 方式二：借助mapState读取
		...mapState('countAbout',['sum','school','subject'])
```

​			（4）开启命名空间后，组件中读取getters数据

```javascript
		// 方式一：自己直接读取
		this.$store.getters['personAbout/firstPersonName']
		// 方式二：借助mapGetters读取
		...mapGetters('countAbout',['bigSum'])
```

​			（5）开启命名空间后，组件中调用dispatch

```javascript
		// 自己直接dispath
		this.$store.dispath('personAbout/addPersonName',person)
		// 借助mapActions
		...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
```

​			（6）开启命名空间后，组件中调用commit

```javascript
		// 方式一：自己直接commit
		this.$store.commit('personAbout/ADD_PERSON',person)
		// 方式二：借助mapMutations
		...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'})
```



## Vue-router

​	1. vue-router的理解

```
	vue的一个插件库，专门用来实现SPA应用
```

​	2 .对SPA应用的理解

```
	1.单页面Web应用（single page web application,SPA）
	2.整个应用只有一个完整的页面
	3.点击页面中的导航链接不会刷新页面，只会做页面的局部刷新
	4.数据需要通过ajax请求获取
```

​	3 .路由的理解

​		1.什么是路由

```
		（1）一个路由就是一组映射关系（key-value）

		（2）key为路径，value可能是funcation或component
```

​		2.路由的分类

```
		1.后端路由：
			（1）理解：value是funcation，用于处理客户端提交的请求
			（2）工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据。
		2.前端路由：
			（1）理解：value是component，用于展示页面内容。
			（2）工作过程：当浏览器的路径改变时，对应的组件就会显示。
```

## 	路由

​	1.理解：一个路由（router）就是一组映射关系（key-value），多个路由需要路由器（router）进行管理。

​	2.前端路由：key是路径，value是组件

### 1.基本使用

​	1.安装vue-router，命令：npm i vue-router

​	2.引入插件：import VueRouter from 'vue-router'

​	3.应用插件：Vue.use(VueRouter)

​	4.编写router配置项：

```javascript
// 该文件专门用于创建整个应用的路由器
// 引入VueRputer
import vueRouter from 'vue-router'
// 引入组件
import About from '../commpents/About'
import Home from '../commpents/Home'

// 创建并暴露一个router实例对象（router），去管理一组一组的路由规则
export default new vueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
```

5. 实现切换（active-class可配置高亮样式）

```javascript
<!-- vue中借助router-link标签实现路由的切换 -->
<!-- 和a标签类似，vue在执行中过程中将其转化为a标签，只是添加了路由的功能 -->
<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
```

​	6.指定展示位置

```javascript
<router-view></router-view>
```

### 2.几个注意点

​	1.路由组件通常放在pages文件夹，一般组件通常存放在compnents文件夹

​	2.通常切换，“隐藏”了路由组件，默认是被毁掉的，需要的时候再去挂载

​	3.每个组件都有自己的$route属性，里面存放的足迹的路由信息

​	4.整个应用只有一个router，可以通过组件的$router属性获取到

### 3.多级路由

​	1.配置路由规则，使用children配置项：

```javascript
	router：[
		{
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:'Home',
            children:[
                {
                    path:'news', //此处一定不要写：/new
                    component:News
                },
                {
                    path:'message', //此处一定不要写：、message
                    component:Message
                }
            ]
        }
	]
```

​	2.跳转（要写完整路径）

```javascript
	<router-link to="/home/news">News</router-link>
```

### 4.路由的query参数

​	1.传递参数

```vue
	<!-- 跳转路由并携带query参数，to的字符串写法 -->
                <router-link :to="`/home/message/detile?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>
                <!-- 跳路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    path:'/home/message/detile',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
```

### 5.命名路由

​	1.作用：可以简化路由的跳转

​	2.如何使用

​		1.给路由命名：

```javascript
	{
		path:'demo',
		component:Demo,
		children:[
			{
				path:'test',
				component:Test,
				children:[
					{
						name:'hello', // 给路由命名
                        path:'welcome'
                        component:Hello,
					}
				]
			}
		]
	}
```

​		2.简化跳转：

```javascript
// 简化前，需要写完整的路径
<router-link to="/demo/test/welcome">跳转</router-link>

// 简化后，直接通过名字跳转
<router-link :to="{name:'hello'}">跳转</router-link>

// 简化写法配合传递参数
<router-link 
      :to="{
         name:'hello',
         query:{
           	id:666,
           	title:'你好'
           }
      }"
>跳转</router-link>
```

### 6.路由的params参数

​	1.配置路由，声明接受params参数

```javascript
		{
		path:'hemo',
		component:Hemo,
		children:[
			{
				path:'news',
				component:News,
				children:[
					{
						name:'xiangqing', // 给路由命名
                        path:'detail/:id/:title' //使用占位符声明接受params参数
                        component:Hello,
					}
				]
			}
		]
	}
```

​	2.传递参数

```javascript
	// 跳转并携带params参数，to的字符串写法
    <router-link to="/home/message/detail/666/你好">跳转</router-link>

    // 跳转并携带params参数，to的对象写法
    <router-link 
          :to="{
             name:'xiangqing',
             query:{
                id:666,
                title:'你好'
               }
          }"
    >跳转</router-link>
```

​	特别注意：路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置！

​	3.接受参数:

```javascript
$route.params.id
$route.params.title
```

### 7.路由的props配置

作用：让路由组件更方便的收到参数

```javascript
{
    name:'xiangqing',
    path:'detile/:id/:title',
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
```

### 8.`<router-link>`的replace属性

​	1.作用：控制路由跳转时操作浏览器历史记录的模式

​	2.浏览器的历史记录有两种写入方式：分别为`push`和`replace`，push时追加历史记录，replace时替换当前记录，路由跳转时候默认为`push`

​	3.如何开启replace模式：`<router-link replace ...></router-link>`

### 9.编程式路由导航

​	1.作用：不借助`<router-link>`实现路由跳转，让路由跳转更加灵活

​	2.具体编码：

```javascript
// $router的两个API
pushShow(m){
    // push打开路由
    this.$router.push({
        name:'xiangqing',
        query:{
            id:m.id,
            title:m.title
        }
    })
},
    replaceShow(m){
        // replace打开路由
        this.$router.replace({
            name:'xiangqing',
            query:{
                id:m.id,
                title:m.title
            }
        })
    }
```

​	3.其他按钮

```javascript
// 后退
this.$router.back()
// 前进
this.$router.forward()
// 跳转几步，参数n为正前进n步，为负后退n步
this.$router.go(n)
```

​	10.缓存路由组件

​		1.作用：让不展示的路由组件保持挂载，不被销毁。

​		2.具体代码：

```vue
<keep-alive include="News">
	<router-view></router-view>
</keep-alive>
```

### 10.缓存路由组件

​	1.作用：让不展示的路由组件保持挂载，不被销毁。

​	1.具体编码：

```vue
// 缓存一个组件
<keep-alive include="News">
    <router-view></router-view>
</keep-alive>

// 缓存多个组件
<keep-alive ：include="['News','Message']">
    <router-view></router-view>
</keep-alive>
```

### 11.两个心得生命周期钩子

​	1.作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态。

​	2.具体名字：

​		1.`activated`组件路由被激活时触发（能看到组件时）

​		2.`deactivated`路由组件失活时触发（看不到组件时）

### 12.路由守卫

​	1.作用：对路由进行权限控制

​	2.分类：全局守卫、独享守卫、组件内守卫

​	3.全局守卫

```javascript
// 创建全局前置路由守卫
// beforeEach()在每次路由切换之前和初始化时执行
router.beforeEach((to,from,next) => {
    console.log('前置守卫',from,to);
    if(to.meta.isAuth) {  //判断当前路由是否需要进行权限控制
        if(localStorage.getItem('school') === 'atguigu') {  //权限控制的具体规则
            next()  //放行
        } else{
            alert('您不隶属尚硅谷学校，无权查看')
            // next({name:'guanyu'})
        }
    } else{
        next() // 放行
    }
})

// 全局后置路由守卫
router.afterEach((to,from) => {
    console.log('后置守卫',from,to);
    document.title = to.meta.title || '硅谷系统'  // 修改网页的title
})
```

​	4.独享路由守卫

```javascript
// 独享路由守卫
// 放在路由器router的需要独享的路由配置里
beforeEnter: (to, from, next) => {
	if(localStorage.getItem('school') === 'atguigu') {
		next()
	} else{
		alert('您不隶属尚硅谷学校，无权查看')
	}
}
```

5.组件内守卫

```javascript
// 写在组件内部，同methods，钩子等位置相同
// 进入守卫，通过路由规则，进入该组件时被调用
beforeRouteEnter(to,from,next) {}
// 离开守卫，通过路由规则，离开该组件时被调用
beforeRouteLeave(to,from,next)
```

### 13.路由器的两种工作模式

​	1.对于一个url来说，什么是hash值？—— #以及后面的内容就是hash值。

​	2.hash值不会包含在htttp请求中，即hash值不会给服务器。

​	3.hash模式：
​		1.地址永远带着#，不美观

​		2.若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法

​		3.兼容性较好

​	4.history模式：

​		1.地址干净，美观

​		2.兼容性和hash模式相比略差

​		3.应用部署上线时需要后端人员支持，解决刷新页面服务器端404的问题

## ElementUI

​	1.安装ELementUI

​		`npm i element-ui`

​	2.完整引入

```javascript
    // 完整引入
    // 引入element-ui组件库
    import ElementUI from 'element-ui'
    // 引入ElementUI全部样式
    import 'element-ui/lib/theme-chalk/index.css';

	// 应用ElementUI插件
	Vue.use(ElementUI)
```

​	3.按需引入

​		1.安装babel-plugin-component

​		`npm install babel-plugin-component -D`

​		2.引入需要的ElementUI

```javascript
    // 按需引入
    import { Button,Row,DatePicker } from 'element-ui';
	// 注册全局组件
	Vue.component(Button.name, Button);
    Vue.component(Row.name, Row);
    Vue.component(DatePicker.name, DatePicker);
```

​		3.配置babel.config.js文件

```javascript
    module.exports = {
      presets: [
        '@vue/cli-plugin-babel/preset',
        ["@babel/preset-env", { "modules": false }]
      ],
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }

```

