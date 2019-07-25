# shop-manage

> 稍息科技开放平台（ERP）的新模块功能，对应分销商城的管理。

## 项目需求

产品需求：钟其鸿、宗璐

UI 设计：宗璐

设计图 svn 路径：产品部 - 分销系统-商家后台_v2.0

## 前端

### 模块目录

+ 收入展示

+ 页面管理

  + 广告上传

  + 广告图

  + 添加分类

  + 商品分类

  + 分类商品列表

+ 商品管理

  + 发布商品

  + 商品管理

+ 订单管理

  + 所有订单

  + 拼团活动

  + 退款维权

### 项目任务初步分工

> 注意以下单个模块可能不仅限一张页面

+ 广告上传、广告图、商品分类、分类商品列表

+ 发布商品、所有订单、拼团活动、退款维权

+ 商品管理、添加分类、收入展示

### 开发

+ 相应开发人员已加入至 ERP 项目，请自行配置好本地与 gitlab 密钥连接

+ 项目 gitlab 地址：git@gitlab.51shaoxi.com:vincheung/erp.git

+ 本模块开发在 feature 分支，相应模块目录主页面已配置并新建完毕

+ 关于 request 请求交互及数据的状态管理请参阅其他模块

+ 拉取项目

```shell
git clone git@gitlab.51shaoxi.com:vincheung/erp.git
```

+ 拉取远程 feature 分支并切换至本地创建的同名分支

```shell
git checkout feature -b origin/feature
```

+ 安装及启动

```shell
npm i

npm run start:no-mock
```

+ 提交

```shell
git add .

git commit -m 'commit message'

git push
```

## 后端

开发人员：柳一鸣、申远

接口文档地址：暂无

## 项目开发文档

[Ant-Design-Pro]

[Ant-Design-Pro]: ../Ant-Design-Pro.md
