<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
        <el-breadcrumb-item>基本表单</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="form-box">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="表单名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="选择器">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option key="webstorm" label="WebStorm" value="webstorm"></el-option>
            <el-option key="vscode" label="VSCode" value="vscode"></el-option>
            <el-option key="sublime" label="Sublime" value="sublime"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="选择开关">
            <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="多选框">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="WebStorm" name="type"></el-checkbox>
            <el-checkbox label="VSCode" name="type"></el-checkbox>
            <el-checkbox label="Sublime" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="单选框">
          <el-radio-group v-model="form.resource">
            <el-radio label="WebStorm"></el-radio>
            <el-radio label="VSCode"></el-radio>
            <el-radio label="Sublime"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="文本框">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: true,
          type: ['WebStorm'],
          resource: 'VSCode',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message.success('提交成功！');
      }
    }
  }
</script>