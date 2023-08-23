<template>
  <el-dialog title="修改数据" :visible.sync="bool" @closed="dialogClose">
    <el-form :model="carInfo">
      <el-form-item label="车车主" :label-width="formLabelWidth">
        <el-select placeholder="请选择" v-model="carInfo.master">
          <el-option v-for="item in options" :key="item.value" :label="item.label"
                     :value="item.value"/>
        </el-select>
      </el-form-item>
      <el-form-item label="车牌号" :label-width="formLabelWidth">
        <el-select v-model="carInfo.plateNumber" placeholder="请选择">
          <el-option label="京ak4756" value="shanghai"/>
          <el-option label="京ak187" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" :label-width="formLabelWidth">
        <el-input-number v-model="carInfo.price" controls-position="right"/>
      </el-form-item>

      <el-form-item label="是否付钱" :label-width="formLabelWidth">
        <el-switch
          v-model="carInfo.maybePrice"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-text="付钱"
          inactive-text="没付钱">
        </el-switch>
      </el-form-item>

      <el-form-item label="工作内容" :label-width="formLabelWidth">
        <el-input type="textarea" v-model="carInfo.content" resize="none" class="add-content" :rows="4"
                  placeholder="请输入内容"/>
      </el-form-item>
      <el-form-item label="创建时间" :label-width="formLabelWidth">
        <el-date-picker
          v-model="carInfo.createDate"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="bool = false">取 消</el-button>
      <el-button type="primary" @click="saveCarData">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "UpdateInfo",
    props: {
      carData: {
        type: Object,
        default() {
          return null;
        }
      },
      dialogShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        bool: false,
        carInfo: {
          id: '',
          master: '',
          plateNumber: '',
          price: '',
          maybePrice: false,
          content: '',
          updateDate: null,
          createDate: null
        },
        formLabelWidth: '130px',
      }
    },
    methods: {
      dialogClose() {
        this.$emit('redactDialogClose', this.bool);
      },
      saveCarData() {
        this.bool = false;
      }
    },
    watch: {
      carData(newVal) {
        this.carInfo = newVal;
      },
      dialogShow(newVal) {
        this.bool = newVal;
      }
    }
  }
</script>

<style scoped>

</style>
