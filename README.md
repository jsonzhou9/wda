# wda document

[中文文档](https://github.com/zzyss86/wda/blob/master/README_CN.md)

> Author: jsonzhou 2018/01/01

Facebook WebDriverAgent Client


## Installation

1. You need to start WebDriverAgent by yourself

   Follow the instructions in <https://github.com/facebook/WebDriverAgent>
   
2.  Install node wda client

```
npm install wda
```

## use

```
const wda = require('wda');
let client = wda.client(); //default: http://localhost:8100
//or
//let client = wda.client('http://192.168.x.x:8100');

```

## Checking service status
```
client.status;
//return JSON object
```

## Session handling
### Starting session and launching application

```
client.launchApp(bundleId);

//client.launchApp('com.apple.mobilesafari');
```

### Querying current session

```
client.getSessionInfo(sessionId);

//client.getSessionInfo('DB2EFA4B-4DA3-455D-B7B5-867B59B273D4');
```

### Removing session and killing application

```
client.removeSession(sessionId);

//client.removeSession('DB2EFA4B-4DA3-455D-B7B5-867B59B273D4');
```

## Application related queries

### Go to home screen

```
client.homeScreen();
```

### Get a screenshot

```
client.screenshot();

//return base64 image
```

### Deactivate application for given time

```
/**
 * Deactivate application for given time
 * @param sessionId
 * @param duration second
 * */
client.deactivateApp(sessionId, duration);

//client.deactivateApp('C85A76E4-690D-4C7D-AEBA-C386263801C5',3);
```

### Change device orientation

**Supported orientations are:**

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

## Searching for elements

You can search for elements by:

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


## Interacting with elements

### Querying properties

```
/**
 * Querying properties
 * @param sessionId
 * @param elementId
 * @param attribute: query properties like enabled, rect, size, location, text, displayed, accessible, name e.g.
 * */
client.properties(sessionId,elementId,attribute);
```

### Tapping element

```
/**
 * Tapping element
 * @param sessionId
 * @param elementId
 * */
client.click(sessionId,elementId);
```

### Typing text

```
/**
 * Typing text
 * @param sessionId
 * @param elementId
 * @param textArray for example: ['h','t','t','p']
 * */
client.typingText(sessionId,elementId,textArray);
```
### Clearing text

```
/**
 * Clearing text
 * @param sessionId
 * @param elementId
 * */
client.clearText(sessionId,elementId);
```

## Alerts

### Get alert

```
/**
 * Get alert
 * @param sessionId
 * */
client.getAlert(sessionId);
```

### Accept alert

```
/**
 * Accept alert
 * @param sessionId
 * */
client.acceptAlert(sessionId);
```

### Dismiss alert

```
/**
 * Dismiss alert
 * @param sessionId
 * */
client.getAlert(sessionId);
```

## Touch ID

### Match TouchID

```
/**
 * Match TouchID
 * @param sessionId
 * */
client.matchTouchID(sessionId);
```

### Do not match TouchID

```
/**
 * Do not match TouchID
 * @param sessionId
 * */
client.notMatchTouchID(sessionId);
```
