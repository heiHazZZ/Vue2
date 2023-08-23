// 分别暴露
export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        },
    },
    data() {
        return {
            x:100,
            y:200
        }
    },
}
export const mixin2 = {
    mounted() {
        console.log('你好！');
    },
}