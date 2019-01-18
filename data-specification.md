# data-specification

> 前后端数据交互规范。

## 后端数据返回

+ 基本字段结构

  + "code"

  + "message"

  + "items"

+ 定义成功状态码 "0"

```javascript
const code = '0'
```

+ 状态码异常时 message 需返回信息

> 好的

```json
{
  "code": "-1",
  "message": "fail",
  "items": ""
}
```

> 坏的

```json
{
  "code": "-1",
  "message": "",
  "items": ""
}
```

+ 字段无数据返回 "" 或者 null

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
    "key": null
  }
}
```

> 坏的

```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": 0
  }
}
```

+ 列表项为空时需返回空数组

> 好的

```json
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
    "arr": ""
  }
}
```

+ 列表项需指定 rowKey

```json
{
  "code": "0",
  "message": "",
  "items": {
    "arr": [
      {
        "id": 1,
        "name": "张三",
      },
      {
        "id": 2,
        "name": "李四",
      },
      {
        "id": 3,
        "name": "王五",
      },
    ]
  }
}
```

> 坏的

```json
{
  "code": "0",
  "message": "",
  "items": {
    "arr": [
      {
        "name": "张三",
      },
      {
        "name": "李四",
      },
      {
        "name": "王五",
      },
    ]
  }
}
```

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
```

> 坏的

```json
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

+ 属性值返回字符串类型

> 好的

```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": "0"
  }
}
```

> 坏的

```json
{
  "code": "0",
  "message": "",
  "items": {
    "key": 0
  }
}
```

## 前端数据传递

+ 属性值传递字符串类型

> 好的

```javasrcipt
{
  key: "0"
}
```

> 坏的

```javasrcipt
{
  key: 0
}
```

+ 表单 - 多选项 键值唯一且为数组

> 好的

```javasrcipt
{
  option: ["1", "2", "3"]
}

{
  option: ["1", "3"]
}

{
  option: ["a", "b", "c"]
}
```

> 坏的

```javasrcipt
{
  option1: "1",
  option2: "2",
  option3: "3"
}
```