<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 其他</el-breadcrumb-item>
        <el-breadcrumb-item>卡片</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../../static/img/es6.png" class="image">
          <div style="padding: 14px;">
            <span>Understanding ECMAScript 6</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: +new Date()
      };
    }
  }
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

