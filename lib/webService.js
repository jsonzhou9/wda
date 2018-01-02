const request = require('sync-request');
const utils = require('./utils');
const config = require('./config');
const API = config.api;

let webService = {
    baseUrl: config.default.server
};

webService.init = function(server){
    if(server){
        this.baseUrl = server;
    }
};

webService.syncRequest = function(opts,requestOpts){
    if(!opts || !opts.url){
        console.error('[webService.syncRequest] Parameter error');
        return config.default.commonError;
    }
    let url = this.getUrl(opts.url,opts.urlData);
    let method = opts.method ? opts.method.toUpperCase() : 'GET';
    requestOpts = requestOpts || {};
    if(method==='POST' && opts.data){
        requestOpts.json = opts.data;
    }else if(method==='POST'){
        requestOpts.body = '';
    }
    if(opts.timeout){
        requestOpts.timeout = opts.timeout;
    }

    let res;
    try {
        console.log(`url=${url},method=${method}`,JSON.stringify(Object.assign({},config.default.webService,requestOpts),null,4));
        res = request(method, url, Object.assign({},config.default.webService,requestOpts));
    }catch (err){
        console.error(err);
    }

    if(res && res.statusCode===200){
        return JSON.parse(res.getBody('utf8'));
    }else{
        return config.default.commonError;
    }
};

webService.getUrl = function(url,data){
    return this.baseUrl + utils.formatStr(url,data);
};

webService.status = function(){
    return this.syncRequest(API.status);
};

webService.launchApp = function(bundleId){
    return this.syncRequest(Object.assign({
        data: {desiredCapabilities:{bundleId:bundleId}}
    },API.session));
};

webService.getSessionInfo = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId}
    },API.getSessionId));
};

webService.removeSession = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId}
    },API.deleteSessionId));
};

webService.homeScreen = function(){
    return this.syncRequest(API.homeScreen);
};

webService.screenshot = function(){
    return this.syncRequest(API.screenshot);
};

webService.deactivateApp = function(sessionId,duration){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId},
        data:{duration:duration}
    },API.deactivateApp));
};

webService.orientation = function(sessionId,orientation){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId},
        data:{orientation:orientation}
    },API.orientation));
};

webService.source = function(format){
    return this.syncRequest(API.source,{qs:{format:format}});
};

webService.elements = function(sessionId,using,value){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId},
        data:{using:using,value:value}
    },API.elements));
};

webService.properties = function(sessionId,elementId,attribute){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId,elementId:elementId,attribute:attribute}
    },API.properties));
};

webService.click = function(sessionId,elementId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId,elementId:elementId}
    },API.click));
};

webService.typingText = function(sessionId,elementId,textArray){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId,elementId:elementId},
        data: {value:textArray}
    },API.typingText));
};

webService.clearText = function(sessionId,elementId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId,elementId:elementId}
    },API.clearText));
};

webService.getAlert = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId}
    },API.getAlert));
};

webService.acceptAlert = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId}
    },API.acceptAlert));
};

webService.dismissAlert = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId}
    },API.dismissAlert));
};

webService.matchTouchID = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId},
        data: {match:1}
    },API.dismissAlert));
};

webService.notMatchTouchID = function(sessionId){
    return this.syncRequest(Object.assign({
        urlData: {sessionId:sessionId},
        data: {match:0}
    },API.dismissAlert));
};

module.exports = webService;