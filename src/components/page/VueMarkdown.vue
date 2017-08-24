<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
        <el-breadcrumb-item>vuemarkdown</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="plugins-tips">
      VueMarkDown
      项目地址：<a href="https://github.com/miaolz123/vue-markdown" target="_blank">VueMarkDown</a>
    </div>
    <div>
      <vue-markdown>this is the default slot</vue-markdown>
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    data() {
      return {}
    },
    components: {
      VueMarkdown
    }
  }
</script>
  
<style>
  
</style>