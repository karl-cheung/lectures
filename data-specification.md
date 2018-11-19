# data-specification

> 前后端数据交互规范。


## json 数据。

+ 基本字段结构

  - "code"

  - "message"

  - "items"

+ 定义成功状态码 "00000000", 其他示例 "0" 相应替换为 "00000000"

+ 状态码异常时 message 需返回信息

> 好的
```json
{
  "code": "00000000",
  "message": "",
  "items": ""
}

{
  "code": "-1",
  "message": "fail",
  "items": ""
}
```

> 坏的
```json
{
  "code": "0",
  "message": "",
  "items": ""
}

{
  "code": "-1",
  "message": "",
  "items": ""
}
```

+ 字段数据需返回空字符串

+ 列表项为空时需返回空数组

+ 键值数据为空时不可省去键名

> 好的
```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": ""
  }
}

{
  "code": "0",
  "message": "",
  "items": {
    "arr": []
  }
}
```

> 坏的
```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": null
  }
}

{
  "code": "0",
  "message": "",
  "items": {
    "arr": ""
  }
}

{
  "code": "0",
  "message": "",
  "items": {}
}
```

+ json 对象里不可返回 json 对象

> 好的
```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": {
      "key": "val"
    }
  }
}
```

> 坏的
```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": "{\"key\":\"val\"}"
  }
}
```


## 接口需有前缀与版本号

+ 前缀为 /api

+ 版本号示例为 /1.2

```
'/api/1.2/query'
```
