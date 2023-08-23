<template>
  <el-dialog title="收货地址" :visible.sync="bool" @closed="closedDialog">
    <el-form>
      <el-form-item label="编辑车主">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="masterId" placeholder="请选择">
              <el-option
                v-for="item in masterList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <el-button type="warning" @click="masterRedactClick">编辑</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="danger" @click="deleteMasterClick">删除</el-button>
          </el-col>
          <el-col :span="7" v-show="masterRedact">
            <el-input v-model="masterRedactValue" placeholder="请输入内容">
              <el-button slot="append" @click="masterRedactSave">保存</el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="编辑车号">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-select v-model="carNumberId" placeholder="请选择">
              <el-option
                v-for="item in carNumberList"
                :key="item.id"
                :label="item.carNumber"
                :value="item.id">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <el-button type="warning" @click="carNumberRedactClick">编辑</el-button>
          </el-col>
          <el-col :span="5">
            <el-button type="danger" @click="deleteCarNumberClick">删除</el-button>
          </el-col>
          <el-col :span="7" v-show="carNumberRedact">
            <el-input v-model="carNumberRedactValue" placeholder="请输入内容">
              <el-button slot="append" @click="carNumberRedactSave">保存</el-button>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button @click="bool = false">取 消</el-button>
      <el-button type="primary" @click="bool = false">确 定</el-button>
    </div>
  </el-dialog>


</template>

<script>
  export default {
    name: "redactMaster",
    props: {
      masterDialog: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        bool: false,

        masterList: [{
          id: '1',
          name: '马儿'
        }],
        masterId: 0,
        masterRedact: false,
        masterRedactValue: '',

        carNumberList: [{id: '1', carNumber: '京A7765'}],
        carNumberId: 0,
        carNumberRedact: false,
        carNumberRedactValue: '',
      }
    },
    methods: {
      masterRedactClick() {
        if (this.masterId !== 0) {
          this.masterRedact = true;
          const master = this.masterList.filter(master => master.id === this.masterId)[0];
          this.masterRedactValue = master.name;
        }
      },
      masterRedactSave() {
        this.masterRedact = false;
      },
      deleteMasterClick() {
        this.$confirm('确定要删除吗，该车主下还有30个车和300条数据', '提示', {
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

      carNumberRedactClick() {
        if (this.carNumberId !== 0) {
          this.carNumberRedact = true;
          const carNumber = this.carNumberList.filter(carNumber => carNumber.id === this.carNumberId)[0];
          this.carNumberRedactValue = carNumber.carNumber;
        }
      },
      carNumberRedactSave() {
        this.carNumberRedact = false;
      },
      deleteCarNumberClick() {
        this.$confirm('确定要删除吗，该车牌号下还有300条数据', '提示', {
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

      closedDialog() {
        this.$emit('closedDialog', this.bool);
      }
    },

    watch: {
      masterDialog(newVal) {
        this.bool = newVal;
      }
    }
  }
</script>

<style scoped>

</style>
