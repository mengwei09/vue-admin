# vue-admin #
基于Vue 2.x + Element UI 的后台管理系统

## 功能 ##
- [x] 登录/注销
- [x] 表格
- [x] 表单
- [x] 图表
- [x] 富文本编辑器
- [x] markdown编辑器
- [x] 图片拖拽/裁剪上传
- [x] 列表拖拽排序


## 目录结构 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目打包路径
	|-- src                              // 源码目录
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|		|-- page                   	     // 主要路由页面
	|           |-- Charts.vue           // 基础图表
	|           |-- BaseForm.vue         // 基础表单
	|           |-- BaseTable.vue        // 基础表格
	|           |-- Login.vue          	 // 登录
	|           |-- Markdown.vue         // markdown组件
	|           |-- VueMarkdown.vue      // vuemarkdown组件
	|           |-- Readme.vue           // 自述组件
	|           |-- Upload.vue           // 图片上传
	|           |-- VueEditor.vue        // 富文本编辑器
	|           |-- VueTable.vue         // vue表格组件
	|           |-- Card.vue             // 卡片组件
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 安装步骤 ##

	git clone https://github.com/mengwei09/vue-admin.git      
	cd vue-admin    
	npm install         

## 本地开发 ##

	npm run dev  // 开启服务器，浏览器访问 http://localhost:8080

## 构建生产 ##

	npm run build  // 执行构建命令，生成的dist文件夹放在服务器下即可访问