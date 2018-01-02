# wda 中文文档

[English document]()

> Author: jsonzhou 2018/01/01

Facebook WebDriverAgent Client，针对Facebook WebDriverAgent的node.js客户端，发布在npm。


## 安装

1. 你需要先安装`WebDriverAgent`

   Facebook WebDriverAgent主页： <https://github.com/facebook/WebDriverAgent>
   
2.  安装`wda`

```
npm install wda
```

## 使用

```
const wda = require('wda');
let client = wda.client(); //default: http://localhost:8100
//or
//let client = wda.client('http://192.168.x.x:8100');

```

> 注意：以下所有接口都是同步返回JSON对象。

## 检查`WebDriverAgent`服务状态
```
client.status;
//return JSON object
```

## 会话处理
### 开启一个会话并启动指定APP

```
client.launchApp(bundleId);

//client.launchApp('com.apple.mobilesafari');
```

### 查询指定会话

```
client.getSessionInfo(sessionId);

//client.getSessionInfo('DB2EFA4B-4DA3-455D-B7B5-867B59B273D4');
```

### 移除会话并杀掉应用

```
client.removeSession(sessionId);

//client.removeSession('DB2EFA4B-4DA3-455D-B7B5-867B59B273D4');
```

## 应用相关操作

### 触发`HOME键`，回到主桌面

```
client.homeScreen();
```

### 截屏

返回Base64的图片编码

```
client.screenshot();

//return base64 image
```

### 指定时间（秒）让应用退到后台

```
/**
 * Deactivate application for given time
 * @param sessionId
 * @param duration second
 * */
client.deactivateApp(sessionId, duration);

//client.deactivateApp('C85A76E4-690D-4C7D-AEBA-C386263801C5',3);
```

### 改变设备屏幕方向

**目前只支持这几种屏幕方向:**

- PORTRAIT
- LANDSCAPE
- UIA_DEVICE_ORIENTATION_LANDSCAPERIGHT
- UIA_DEVICE_ORIENTATION_PORTRAIT_UPSIDEDOWN

```
/**
 * Change device orientation
 * @param orientation
 * */
client.orientation(sessionId,orientation);

//client.orientation('C85A76E4-690D-4C7D-AEBA-C386263801C5','LANDSCAPE');
```

### Source aka tree

```
/**
 * source aka tree
 * @param format default:xml, format=json || xml
 * */
client.source(format);

//client.source('json');
```

## 查找元素

你可以用以下方式查找元素

* property with given value (`link text`)

```
/*
 * property with given value (link text)
 * @param sessionId
 * @param value, for example: label=Apple
 * */
client.linkText(sessionId,value);
```

* property with given partial value (`partial link text`)

```
/**
 * property with given partial value (partial link text)
 * @param sessionId
 * @param value, for example: label=App
 * */
client.partialLinkText(sessionId,value);
```

* using `class name`

```
/**
 * using class name
 * @param sessionId
 * @param value, for example: XCUIElementTypeButton
 * */
client.className(sessionId,value);
```

* using `xpath`

```
/**
 * using xpath
 * @param sessionId
 * @param value, for example: //XCUIElementTypeButton[@name='Share']
 *
 * It is not recommended to use xpath queries, since they are not supported by XCTest natively and therefore are slow. Replace them with faster query types if possible.
 * */
client.xpath(sessionId,value);
```

* using `predicate string`

```
/**
 * using predicate string
 * @param sessionId
 * @param value, for example: wdVisible==1
 *
 * Predicate Queries Construction Rules:https://github.com/facebook/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
 * */
client.predicateString(sessionId,value)
```

* using `class chain`

```
/**
 * class chain
 * @param sessionId
 * @param value
 *
 * Class Chain Queries Construction Rules:https://github.com/facebook/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
 * */
client.classChain(sessionId,value);
```


## 元素交互

### 查询指定元素属性值

```
/**
 * Querying properties
 * @param sessionId
 * @param elementId
 * @param attribute: query properties like enabled, rect, size, location, text, displayed, accessible, name e.g.
 * */
client.properties(sessionId,elementId,attribute);
```

### 点击元素

```
/**
 * Tapping element
 * @param sessionId
 * @param elementId
 * */
client.click(sessionId,elementId);
```

### 输入文本

```
/**
 * Typing text
 * @param sessionId
 * @param elementId
 * @param textArray for example: ['h','t','t','p']
 * */
client.typingText(sessionId,elementId,textArray);
```

### 清除文本

```
/**
 * Clearing text
 * @param sessionId
 * @param elementId
 * */
client.clearText(sessionId,elementId);
```

## Alerts警告对话框

### 获取警告对话框

```
/**
 * Get alert
 * @param sessionId
 * */
client.getAlert(sessionId);
```

### 接受警告对话框

```
/**
 * Accept alert
 * @param sessionId
 * */
client.acceptAlert(sessionId);
```

### 禁用警告对话框

```
/**
 * Dismiss alert
 * @param sessionId
 * */
client.getAlert(sessionId);
```

## Touch ID

### 匹配TouchID

```
/**
 * Match TouchID
 * @param sessionId
 * */
client.matchTouchID(sessionId);
```

### 不匹配TouchID

```
/**
 * Do not match TouchID
 * @param sessionId
 * */
client.notMatchTouchID(sessionId);
```
