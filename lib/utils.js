module.exports = {
    formatStr: function(tpl,data){
        if(tpl && /\${[a-zA-Z_]+}/.test(tpl) && data){
            return tpl.replace(/\${([a-zA-Z_]+)}/gi,function(s1,s2){
                if(s2 && data.hasOwnProperty(s2)){
                    return data[s2];
                }
                return '';
            });
        }
        return tpl;
    }
};