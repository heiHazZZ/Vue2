// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions——用于响应组件中的动作
const actions = {
    // jia(context,value){
    //     console.log('actions中的jia被调用了',context,value);
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    odd(context,value){
        context.commit('ODD',value)
    },
    wait(context,value){
        context.commit('WAIT',value)
    }
}
// 准备mutations——用于操作数据
const mutations = {
    JIA(state,value){
        console.log('mutations中的JIA被调用了',state,value);
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    },
    ODD(state,value){
        if(state.sum % 2){
            state.sum += value
        }
    },
    WAIT(state,value){
        setTimeout(() => {
            state.sum += value
        }, 500);
    }
}
// 准备state——用于存储数据
const state = {
    sum:0,
}

// 准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})