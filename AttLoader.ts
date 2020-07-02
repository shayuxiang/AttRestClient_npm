
export class AttLoader{ 
    static api:any;
    static entity:any;
    static enum:any;

    constructor(){ }

    static Init(url,MainCall,axios) {
        
        var that = this;
        axios.get(url).then(function(attclient)
        {
            let AttClientClass  =  eval("("+ attclient.data+")");
            that.api = ( new AttClientClass()).Angular({},axios).api;
            that.entity = ( new AttClientClass()).Angular({},axios).entity;
            that.enum = ( new AttClientClass()).Angular({},axios).enum;
        }).then(function() {
            MainCall();
        });
    }
} 
