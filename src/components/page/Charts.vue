<template>
	<div class="charts-container">
		<div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-date"></i> 图表</el-breadcrumb-item>
        <el-breadcrumb-item>基础图表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="line-chart">
      <ve-line :data="chartData"></ve-line>
    </div>
	</div>
</template>

<script>
  import VeLine from 'v-charts/lib/line'
  export default {
    created () {
      this.chartData = {
        columns: ['日期', '销售量'],
        rows: [
          { '日期': '1月1日', '销售量': 123 },
          { '日期': '1月2日', '销售量': 1223 },
          { '日期': '1月3日', '销售量': 2123 },
          { '日期': '1月4日', '销售量': 4123 },
          { '日期': '1月5日', '销售量': 3123 },
          { '日期': '1月6日', '销售量': 7123 }
        ]
      }
    },
    components: { VeLine }
}
</script>

<style scoped>
  .line-chart {
    width: 100%;
    box-shadow: 1em 1em .5em -.5em rgba(0, 0, 0, 0.3);
  }
</style>