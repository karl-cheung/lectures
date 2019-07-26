# Ant-Design-Pro

> [Ant Design Pro] 一个企业级中后台前端/设计解决方案。

## 技术栈

基于 [ES2015+]、[React]、[UmiJS]、[dva]、[antd] 和 [g2]

## 目录

```shell
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

### UmiJS

+ roadhog + 路由

+ roadhog 是基于 webpack 的封装工具，目的是简化 webpack 的配置

+ 以框架的方式简化 React 开发

```shell
# 安装 yarn tyarn
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

> 纯粹的数据流，React + [Redux] + [Saga]。

#### 用例

> view

```js
import React, { PureComponent } from 'react'
import { connect } from 'dva'

@connect(({ Fake }) => ({
  list,
}))

class Fake extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props
    const params = {}
    dispatch({
      type: 'fake/fetchFakeList',
      payload: params,
    })
    // .then((data) => {})
  }
}
```

> model

```js
import { queryFakeList } from '@/services/api'
import api from '@/utils/api'

export default {
  namespace: 'fake',

  state: {
    list: [],
  },

  effects: {
    *fetchFakeList({ payload }, { call, put, select }) {
      const response = yield call(queryFakeList)
      if (response.code === api.code) {
        yield put({
          type: 'saveFakeList',
          payload: Array.isArray(response) ? response : [],
        })
        // return yield select(() => response.data)
      }
      // return yield select(() => response.code === api.code ? 1 : 0)
    },
  },

  reducers: {
    saveFakeList(state, action) {
      return {
        ...state,
        list: action.payload,
      }
    },
  },
}
```

> services

```js
import { stringify } from 'qs'
import request from '@/utils/request'

export async function queryFakeList(params) {
  return request(`/api/v1/list/query?${stringify(params)}`)
}
```

### antd

+ [栅格]

+ [表单]

+ [表格]

[Ant Design Pro]: https://pro.ant.design/index-cn

[ES2015+]: http://es6.ruanyifeng.com/

[React]: https://reactjs.org/

[UmiJS]: https://umijs.org/

[antd]: https://ant.design/docs/react/introduce-cn

[dva]: https://dvajs.com/

[g2]: https://antv.alipay.com/zh-cn/g2/3.x/index.html

[Redux]: https://redux.js.org/

[Saga]: https://redux-saga.js.org/

[栅格]: https://ant.design/components/grid-cn/

[表单]: https://ant.design/components/form-cn/

[表格]: https://ant.design/components/table-cn/
