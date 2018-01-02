const webService = require('./webService');

class WebDriverAgentClient{
    constructor(server){
        this.server = server;
        webService.init(this.server);
    }

    /**
     * Checking service status
     * */
    get status(){
        return webService.status();
    }

    /**
     * Starting session and launching application
     * @param bundleId
     * */
    launchApp(bundleId){
        return webService.launchApp(bundleId);
    }

    /**
     * Querying current session info
     * @param sessionId
     * */
    getSessionInfo(sessionId){
        return webService.getSessionInfo(sessionId);
    }

    /**
     * Removing session and killing application
     * @param sessionID
     * */
    removeSession(sessionId){
        return webService.removeSession(sessionId);
    }

    /**
     * Go to home screen
     * */
    homeScreen(){
        return webService.homeScreen();
    }

    /**
     * Get a screenshot
     * */
    screenshot(){
        return webService.screenshot();
    }

    /**
     * Deactivate application for given time
     * @param sessionId
     * @param duration second
     * */
    deactivateApp(sessionId, duration){
        duration = duration || 0;
        return webService.deactivateApp(sessionId,duration);
    }

    /**
     * Change device orientation
     * @param orientation
     * */
    orientation(sessionId,orientation){
        return webService.orientation(sessionId,orientation);
    }

    /**
     * source aka tree
     * @param format default:xml, format=json || xml
     * */
    source(format){
        format = format || 'xml';
        return webService.source(format);
    }

    /**
     * property with given value (link text)
     * @param sessionId
     * @param value, for example: label=Apple
     * */
    linkText(sessionId,value){
        return webService.elements(sessionId,'link text',value);
    }

    /**
     * property with given partial value (partial link text)
     * @param sessionId
     * @param value, for example: label=App
     * */
    partialLinkText(sessionId,value){
        return webService.elements(sessionId,'partial link text',value);
    }

    /**
     * using class name
     * @param sessionId
     * @param value, for example: XCUIElementTypeButton
     * */
    className(sessionId,value){
        return webService.elements(sessionId,'class name',value);
    }

    /**
     * using xpath
     * @param sessionId
     * @param value, for example: //XCUIElementTypeButton[@name='Share']
     *
     * It is not recommended to use xpath queries, since they are not supported by XCTest natively and therefore are slow. Replace them with faster query types if possible.
     * */
    xpath(sessionId,value){
        return webService.elements(sessionId,'xpath',value);
    }

    /**
     * using predicate string
     * @param sessionId
     * @param value, for example: wdVisible==1
     *
     * Predicate Queries Construction Rules:https://github.com/facebook/WebDriverAgent/wiki/Predicate-Queries-Construction-Rules
     * */
    predicateString(sessionId,value){
        return webService.elements(sessionId,'predicate string',value);
    }

    /**
     * class chain
     * @param sessionId
     * @param value
     *
     * Class Chain Queries Construction Rules:https://github.com/facebook/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules
     * */
    classChain(sessionId,value){
        return webService.elements(sessionId,'class chain',value);
    }

    /**
     * Querying properties
     * @param sessionId
     * @param elementId
     * @param attribute: query properties like enabled, rect, size, location, text, displayed, accessible, name e.g.
     * */
    properties(sessionId,elementId,attribute){
        return webService.properties(sessionId,elementId,attribute);
    }

    /**
     * Tapping element
     * @param sessionId
     * @param elementId
     * */
    click(sessionId,elementId){
        return webService.click(sessionId,elementId);
    }

    /**
     * Typing text
     * @param sessionId
     * @param elementId
     * @param textArray for example: ['h','t','t','p']
     * */
    typingText(sessionId,elementId,textArray){
        return webService.typingText(sessionId,elementId,textArray);
    }

    /**
     * Clearing text
     * @param sessionId
     * @param elementId
     * */
    clearText(sessionId,elementId){
        return webService.clearText(sessionId,elementId);
    }

    /**
     * Get alert
     * @param sessionId
     * */
    getAlert(sessionId){
        return webService.getAlert(sessionId);
    }

    /**
     * Accept alert
     * @param sessionId
     * */
    acceptAlert(sessionId){
        return webService.acceptAlert(sessionId);
    }

    /**
     * Dismiss alert
     * @param sessionId
     * */
    getAlert(sessionId){
        return webService.dismissAlert(sessionId);
    }

    /**
     * Match TouchID
     * @param sessionId
     * */
    matchTouchID(sessionId){
        return webService.matchTouchID(sessionId);
    }

    /**
     * Do not match TouchID
     * @param sessionId
     * */
    notMatchTouchID(sessionId){
        return webService.notMatchTouchID(sessionId);
    }
}

module.exports = WebDriverAgentClient;
