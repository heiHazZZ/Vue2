<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>年龄:{{myAge+1}}</h2>
    <button @click="updateAge">点击年龄加一</button>
  </div>
</template>

<script>
export default {
    name:'StudentName',
    data() {
        return {
            myAge:this.age
        }
    },
    methods: {
        updateAge(){
            this.myAge++
        }
        
    },

    // props里数据的优先级高于data 
    // 简单声明接受
    // props:['name','sex','age']

    // 接受的同时，对数据类型进行限制
    // props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    // }

    // 接收的同时对数据：进行类型限制+默认值的指定+必要性限制
    props:{
        name:{
            type:String,  // 类型为字符串
            required:true  // name为必传参数
        },
        sex:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:99  // 默认值，没有值传入时使用
        }
    }
}
</script>
