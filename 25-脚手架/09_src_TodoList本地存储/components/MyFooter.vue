<template>
  <div class="todo-footer" v-show="total">
        <label>
          <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
          <input type="checkbox" v-model="isAll" />
        </label>
        <span>
          <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
      </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todos','checkAllTodo','clearAllTodo'],
    computed:{
      total(){
        return this.todos.length
      },
      doneTotal(){
        // reduce方法：pre为统计初始值，current为数组里的每一项
        // 数组里有几项就执行几次，reduce(() => {},0) 这里的0为统计的初始值，也就是pre的值
        // reduce执行一次的返回值作为下一次的pre值
        // const x = this.todos.reduce((pre,current) => {
        //   console.log('@',pre,current);
        //   return pre + (current.done ? 1 : 0)
        // },0)
        
        return this.todos.reduce((pre,todo) => pre + (todo.done ? 1 : 0),0)
      },
      isAll:{
        get(){
          return this.total === this.doneTotal && this.total > 0
        },
        set(value){
          this.checkAllTodo(value)
        }
      }
    },
    methods: {
      checkAll(e){
        this.checkAllTodo(e.target.checked)
      },
      clearAll(){
        this.clearAllTodo()
      }
    },


}
</script>

<style>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>