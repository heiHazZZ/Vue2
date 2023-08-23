<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handlCheck(todo.id)" />
            <!-- 如下代码也能实现功能，但不推荐，因为修改了todo.done，它是props传过来的，违反了props只读原则 -->
            <!-- <input type="checkbox" v-model="todo.done" /> -->
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input 
                type="text" 
                v-show="todo.isEdit" 
                :value="todo.title"
                @blur="handleBlur(todo,$event)"
                ref="inputTitle" 
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button  v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)" >编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    // 声明接受todo对象
    props:['todo'],
    methods: {
        handlCheck(id){
            // console.log(id);
            // 通知App组件将对应的todo对象的done值取反
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        // 删除
        handleDelete(id){
            if(confirm('确定删除吗?')) {
                // console.log(id);
                // this.deleteTodo(id)  // 父给子传递函数
                // this.$bus.$emit('deleteTodo',id)   // 全局事件总线
                pubsub.publish('deleteTodo',id)  // 消息订阅与发布
            }
        },
        // 编辑
        handleEdit(todo){
            // 判断是否第一次点击 编辑 按钮，第一次点添加isEdit属性，以后再点直接修改isEdit值
            // hasOwnProperty 判断对象身上是否有某个属性
            if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
            } else{
                this.$set(todo,'isEdit',true)
            }
            // $nextTick里的回调函数会在下一次DOM节点更新完毕后再执行
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        // 失去焦点回调（执行修改逻辑）
        handleBlur(todo,e){
            todo.isEdit = false
            console.log('updateTodo',todo.id,e.target.value);
           if(!e.target.value.trim()) return alert('输入不能为空！')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
        }
    }
}
</script>

<style>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
        display: none;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>