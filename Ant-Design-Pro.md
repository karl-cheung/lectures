# Ant-Design-Pro

[Ant Design Pro] 一个企业级中后台前端/设计解决方案。


## 技术栈

基于 [ES2015+]、[React]、[UmiJS]、[dva]、[g2] 和 [antd]


### React

> [React 中文文档]

+ [JSX]

+ [井字棋游戏]

+ [时间旅行]

+ store

  > 页面初始化时数据不持久

  - 数据本地化读取 1.本地 2.路由 3.地址栏

  - 组件缓存

+ 行为分析

  - 后退与切换

  - 重定向与刷新

  - tab 切换的方式较为粗糙。[泰咖啡]


### UmiJS

+ roadhog + 路由

+ roadhog 是基于 webpack 的封装工具，目的是简化 webpack 的配置

+ 以框架的方式简化 React 开发

```
# 国内源
$ npm i yarn tyarn -g

# 全局安装
$ yarn global add umi

# 创建页面
$ umi g page index

# 启动本地服务器
$ umi dev

# 构建
$ umi build

# 本地验证
$ yarn global add serve
$ serve ./dist

# 部署
$ yarn global add now
$ now ./dist
```


### dva

+ React + [Redux] + Saga

+ 纯粹的数据流


### antd

+ [栅格]


## 开发

+ 全局模块与业务模块分离

  - layouts

  - 登录、注册与鉴权

  - 权限设置

  - 异常页

+ 优化与提炼

  - request

  - 前端国际化

    * 声明式

    * 编程式

  - 懒加载

  - 动态加载

  - 按需加载

  - webpack 配置

  - 请求代理

  - 自动化集成部署

  - 前端项目部署

  - nginx 优化 与配置更改

+ 规范与跟踪

  - 目录

```
src

  assets
    less
      A.less
    css
      A.css
    font
      iconfontA.eot
      iconfontA.svg
      iconfontA.ttf
      iconfontA.woff
    img
      pageA-1@2x.png
      pageA-1@3x.png
    js
      A.js
    json
      json-A.json
    keyt
      private-key-A
      public-key-A
    svg
    ts

  components
    componentsA
      index.js
      index.less
      img
        componentsA-1@2x.png
        componentsA-1@3x.png
      font
        iconfontA.eot
        iconfontA.svg
        iconfontA.ttf
        iconfontA.woff

  e2e

  layouts

  locales

  models

  pages
    routeA
      routeA-childA
        routeA-childA-childA

  global

  services

  utils
```

  - 代码检查

    * ESLint - .eslintrc
    * StyleLint - .stylelintrc

+ mock 数据

+ 单元测试

+ TypeScript

## git

+ master - 生产分支

+ develop - 开发分支

+ feature - 新功能分支

+ 1.0.0 从 develop 分支开发



[Ant Design Pro]: https://preview.pro.ant.design/dashboard/analysis

[ES2015+]: http://es6.ruanyifeng.com/

[React]: https://reactjs.org/

[UmiJS]: https://umijs.org/

[dva]: https://dvajs.com/

[g2]: https://antv.alipay.com/zh-cn/g2/3.x/index.html

[antd]: https://ant.design/docs/react/introduce-cn

[React 中文文档]: https://react.docschina.org/

[JSX]: https://react.docschina.org/docs/introducing-jsx.html

[井字棋游戏]: https://react.docschina.org/tutorial/tutorial.html

[时间旅行]: https://preview.pro.ant.design/form/step-form/confirm

[泰咖啡]: http://t.51shaoxi.com/user/index.html

[Redux]: https://redux.js.org/

[栅格]: https://ant.design/components/grid-cn/
