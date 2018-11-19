# data

> 交互规范。


## json 数据。

+ 定义成功状态码与异常状态码 message 需返回信息

```json
{
  "code": "0",
  "message": "",
  "items": null
}

{
  "code": "-1",
  "message": "fail",
  "items": null
}
```

+ 列表项为空时需返回空数组

```json
{
  "code": "0",
  "message": "",
  "items": []
}

{
  "code": "0",
  "message": "",
  "items": null
}

{
  "code": "0",
  "message": "",
  "items": ""
}
```

+ 键值数据为空时不可省去键名

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
  "items": {}
}
```

+ json 对象里不可返回 json 对象

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

{
  "code": "0",
  "message": "",
  "items": {
    "key": "{"key":"val"}"
  }
}
```


## 接口需有前缀与版本号

```
'/api/1.2/query'
```
