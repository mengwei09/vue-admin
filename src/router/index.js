import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/readme',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      children:[
        {
          path: '',
          component: resolve => require(['../components/page/Readme.vue'], resolve)
        },
        { // 注意：以 / 开头的嵌套路径会被当作根路径, 这让你充分的使用嵌套组件而无须设置嵌套的路径
          path: '/basetable',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve)
        },
        {
          path: '/vuetable',
          component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
        },
        {
          path: '/baseform',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve)
        },
        {
          path: '/vueeditor',
          component: resolve => require(['../components/page/VueEditor.vue'], resolve)    // Vue-Quill-Editor组件
        },
        {
          path: '/markdown',
          component: resolve => require(['../components/page/Markdown.vue'], resolve)     // Vue-Quill-Editor组件
        },
        {
          path: '/vuemarkdown',
          component: resolve => require(['../components/page/VueMarkdown.vue'], resolve)     // Vue-MarkDown组件
        },
        {
          path: '/upload',
          component: resolve => require(['../components/page/Upload.vue'], resolve)       // Vue-Core-Image-Upload组件
        },
        {
          path: '/echarts',
          component: resolve => require(['../components/page/Charts.vue'], resolve)   // echarts组件
        },
        {
          path: '/drag',
          component: resolve => require(['../components/page/DragList.vue'], resolve)    // 拖拽列表组件
        },
        {
          path: '/card',
          component: resolve => require(['../components/page/Card.vue'], resolve)    // 卡片组件
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
  ]
})
