module.exports = {
    default: {
        server: 'http://localhost:8100',
        webService: {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            timeout: 10000
        },
        commonError: {"status":9999,"msg":"system error!"}
    },
    api: {
        status: {method:'get', url:'/status'},
        session: {method:'post', url:'/session'},
        getSessionId: {method:'get', url:'/session/${sessionId}'},
        deleteSessionId: {method:'delete', url:'/session/${sessionId}'},
        homeScreen: {method:'post', url:'/wda/homescreen'},
        screenshot: {method:'get', url:'/screenshot'},
        deactivateApp: {method:'post', url:'/session/${sessionId}/wda/deactivateApp'},
        orientation: {method:'post', url:'/session/${sessionId}/orientation'},
        source: {method:'get', url:'/source', timeout: 30000},
        elements: {method:'post', url:'/session/${sessionId}/elements'},
        properties: {method:'get', url:'/session/${sessionId}/element/${elementId}/${attribute}'},
        click: {method:'post', url:'/session/${sessionId}/element/${elementId}/click'},
        typingText: {method:'post', url:'/session/${sessionId}/element/${elementId}/value'},
        clearText: {method:'post', url:'/session/${sessionId}/element/${elementId}/clear'},
        getAlert: {method:'get', url:'/session/${sessionId}/alert/text'},
        acceptAlert: {method:'post', url:'/session/${sessionId}/alert/accept'},
        dismissAlert: {method:'post', url:'/session/${sessionId}/alert/dismiss'},
        touchID: {method:'post', url:'/session/${sessionId}/wda/touch_id'}
    }
};