## 项目简介

事先说明：这是一个基于黑马程序员小兔鲜儿项目改编的个人商城系统小程序，代码整体几乎相同，只是更换了部分商业元素，对应的教学视频在哔站可以搜到。

采用Vue3+Typescript技术进行编写的uni-app,包含从首页浏览商品，商品详情，微信登录，加入购物车，提交订单，微信支付，订单管理等常见的基本功能功能。

当前仓库为Yiming的小站商铺的**项目源码**，供个人学习使用。本项目由作者由空白框架根据教学一步步手搓调试而成，不太可能会有运行上的报错。

可以直接在IDE中git clone后编译进行运行。需下载微信开发者工具。

由于这是一个前端项目，涉及到的后端接口需要自行编写或者采用黑马程序员提供的接口。

所以在学习开发过程中，凡是遇到接口的地方会采用写死或者调用第三方的方式我尽量避免了编写后端接口的需要（毕竟定义是展示学习型项目，不需要实时更新维护）。

后续会尝试上传微信小程序，供大家学习参考。

## 效果展示
[项目开发中，待补充]

## 资料说明
### 📗 接口文档
[https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/](https://www.apifox.cn/apidoc/shared-0e6ee326-d646-41bd-9214-29dbf47648fa/)
### ✏️ 在线笔记
[https://megasu.gitee.io/uni-app-shop-note/](https://megasu.gitee.io/uni-app-shop-note/)
## 运行程序
1. 安装依赖
```shell
# npm
npm i --registry=https://registry.npmmirror.com
# pnpm
pnpm i --registry=https://registry.npmmirror.com
```
2. 运行程序
```shell
# 微信小程序端
npm run dev:mp-weixin
# H5端
npm run dev:h5
# App端
需 HbuilderX 工具，运行 - 运行到手机或模拟器
```
3. 微信开发者工具导入 `/dist/dev/mp-weixin` 目录
### 工程结构解析
```
├── .husky                     # Git Hooks
├── .vscode                    # VS Code 插件 + 设置
├── dist                       # 打包文件夹（可删除重新打包）
├── src                        # 源代码
│   ├── components             # 全局组件
│   ├── composables            # 组合式函数
│   ├── pages                  # 主包页面
│       ├── index               # 首页
│       ├── category            # 分类页
│       ├── cart                # 购物车
│       ├── my                  # 我的
│       └── login               # 登录页
│   ├── services               # 所有请求
│   ├── static                 # 存放应用引用的本地静态资源的目录
│       ├── images              # 普通图片
│       └── tabs                # tabBar 图片
│   ├── stores                 # 全局 pinia store
│       ├── modules             # 模块
│       └── index.ts            # store 入口
│   ├── styles                 # 全局样式
│       └── fonts.scss          # 字体图标
│   ├── types                  # 类型声明文件
│       └── component.d.ts      # 全局组件类型声明
│   ├── utils                  # 全局方法
│   ├── App.vue                # 入口页面
│   ├── main.ts                # Vue初始化入口文件
│   ├── pages.json             # 配置页面路由等页面类信息
│   ├── manifest.json          # 配置appid等打包信息
│   └── uni.scss               # uni-app 内置的常用样式变量
├── .editorconfig              # editorconfig 配置
├── .eslintrc.cjs              # eslint 配置
├── .prettierrc.json           # prettier 配置
├── .gitignore                 # git 忽略文件
├── index.html                 # H5 端首页
├── package.json               # package.json 依赖
├── tsconfig.json              # typescript 配置
└── vite.config.ts             # vite 配置
```
