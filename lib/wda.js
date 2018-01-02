const WebDriverAgentClient = require('./WebDriverAgentClient');

class wda{
    static client(server){
        if(this.clientInstance){
            return this.clientInstance;
        }
        this.clientInstance = new WebDriverAgentClient(server);
        return this.clientInstance;
    }

    static newClient(server){
        return new WebDriverAgentClient(server);
    }
}

module.exports = wda;