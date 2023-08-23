<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-input placeholder="请输入内容" class="input-with-select">
              <el-select v-model="select" slot="prepend" class="query-select" placeholder="请选择查询方式">
                <el-option label="车主" value="1"></el-option>
                <el-option label="车牌号" value="2"></el-option>
                <el-option label="工作内容" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
        </el-col>
        <el-col :span="4">
           <el-button type="primary" @click="masterDialog = true">编辑车主和车牌号</el-button>
        </el-col>
        <el-col :span="5">
          <el-select v-model="selectValue" placeholder="请选择排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-table
        border
        stripe
        :data="carDataList"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="编号">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="车主">
                <span>{{ props.row.carMaster.name}}</span>
              </el-form-item>
              <el-form-item label="车牌号">
                <span>{{ props.row.carNumber.carNumber }}</span>
              </el-form-item>
              <el-form-item label="工作内容">
                <span>{{ props.row.content }}</span>
              </el-form-item>
              <el-form-item label="更新时间">
                <span>{{ props.row.updateDate }}</span>
              </el-form-item>
              <el-form-item label="创建时间">
                <span>{{ props.row.createDate }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="#" prop="id" width="100"/>
        <el-table-column label="车主" prop="master" width="200"/>
        <el-table-column label="车牌号" prop="plateNumber" width="200"/>
        <el-table-column label="是否付钱" type="template"  width="200">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.maybePrice">付钱</el-tag>
            <el-tag type="danger" v-else>没有付钱</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="工作内容" prop="content"/>
        <el-table-column label="创建时间" prop="createDate" width="200"/>
        <el-table-column label="编辑" width="270" type="template">
          <template slot-scope="scope">
            <!---->
            <el-button type="danger" @click="deleteClick(scope.row.id)">删除</el-button>
            <el-button type="warning" @click="redactClick(scope.row.id)">编辑</el-button>
            <el-button type="primary">打印</el-button>
          </template>

        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-card>

    <redact-master :masterDialog="masterDialog" @closedDialog="masterDialogClose"></redact-master>

    <!--添加-->
    <el-dialog title="添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="车车主" :label-width="formLabelWidth">
          <el-select placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label"
                       :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="车牌号" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="京ak4756" value="shanghai"/>
            <el-option label="京ak187" value="beijing"/>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input-number v-model="num" controls-position="right"/>
        </el-form-item>

        <el-form-item label="是否付钱" :label-width="formLabelWidth">
          <el-switch
            v-model="switchs"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="付钱"
            inactive-text="没付钱">
          </el-switch>
        </el-form-item>


        <el-form-item label="工作内容" :label-width="formLabelWidth">
          <el-input type="textarea" resize="none" class="add-content" :rows="4"
                    placeholder="请输入内容"/>
        </el-form-item>


        <el-form-item label="创建时间" :label-width="formLabelWidth">
          <el-date-picker
            v-model="date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <!--修改-->
    <update-info :car-data="redactCarData" :dialog-show="redactDialogShow" @redactDialogClose="redactDialogClose"></update-info>
  </div>
</template>

<script>

  import RedactMaster from "./mainChild/RedactMaster";
  import UpdateInfo from "./mainChild/UpdateInfo";
  import request from "../network/requset";

  export default {
    name: "Main",
    components: {RedactMaster, UpdateInfo},
    data() {
      return {
        redactDialogShow: false,
        redactCarData: null,
        masterDialog: false,
        dialogFormVisible: false,
        input3: '',
        select: '',
        options: [
          {
            value: '1',
            label: '价格升序1111111111'
          }, {
            value: '2',
            label: '价格降序'
          }, {
            value: '3',
            label: '付钱'
          }, {
            value: '4',
            label: '没有付钱'
          }],
        carDataList: [
          {
            id: 0,
            carMaster: {
              createDate: "2022-10-16 18:03:28",
              id: 1,
              maybeDelete: 0,
              name: "马儿",
              sortNumber: 1
            },
            carNumber: {
              id: 1,
              carNumber: "京ak47a",
              createDate: "2022-10-17 18:06:28",
              masterId: 1,
              maybeDelete: 0,
              sortNumber: 11
            },
            masterId: "1",
            numberId: "1",
            price: 30,
            content: "啥也没干",
            maybeDelete: 0,
            maybePrice: 1,
            createDate: "2022-10-17 05:21:53",
            deleteDate: "2021-10-17 05:31:56",
            updateDate: "2021-10-17 05:21:55"
          }
        ],
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '130px',
        selectValue: '',
        num: 0,
        switchs: true,
        date: '2021-2-4'
      }
    },
    methods:{
      masterDialogClose(bool){
        this.masterDialog = bool;
      },
      redactDialogClose(bool){
        console.log(bool);
        this.redactDialogShow = bool;
      },
      redactClick(id){
        this.redactCarData = this.carDataList.filter(car => car.id === id)[0];
        this.redactDialogShow = true;
      },
      deleteClick(id){
        this.$confirm('确定要删除吗', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    },
    created() {
      request({
        url: "/carInfo/findCarInfo"
      }).then(value => {
        if(value.code === 200){
          this.carDataList = value.data.list;
          console.log(this.carDataList);
        }else {
          this.$message.error(value.msg);
        }
      })
    }
  }
</script>

<style scoped>


  .el-table {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .el-pagination {
    margin: 0 auto;
  }

  .add-content {
    font-size: 16px;
    width: 400px;
  }


  .query-select {
    width: 130px;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .el-form-item {
    color: red;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }

</style>
