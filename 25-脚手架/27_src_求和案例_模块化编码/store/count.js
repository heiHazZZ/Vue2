// 求和相关配置
export default {
    // 命名空间
    namespaced:true,
    actions:{
        odd(context,value){
            context.commit('ODD',value)
        },
        wait(context,value){
            context.commit('WAIT',value)
        }
    },
    mutations:{
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
        },
    },
    state:{
        sum:0,
        school:'尚硅谷',
        subject:'前端',
    },
    getters:{
        bigSum(state){
            return state.sum * 10
        }
    }
}