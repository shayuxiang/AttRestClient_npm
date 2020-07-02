//从服务器载入AttRest的接口文件，进行全局加载
//Angular2使用TS文件进行载入
//JQuery直接使用如下代码绑定
//      var client = new AttClient();
//      client.JQuery($);
//      console.log($.api);
export const AttLoader = function() {

    //加载API到Vue
    this.VueClient = function(vue, url, axios, callback) {
        axios.get(url).then(function(attclient) {
            var AttClientClass = eval("(" + attclient.data + ")");
            callback((new AttClientClass()).Vue(vue, axios));
        });
    };
    //挂载API到React
    this.ReactClient = function(react, url, axios, callback) {
        axios.get(url).then(function(attclient) {
            var AttClientClass = eval("(" + attclient.data + ")");
            callback((new AttClientClass()).React(react, axios));
        });
    };
};