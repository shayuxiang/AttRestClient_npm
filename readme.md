# AttRest 客户端集成


# 安装
```
npm install attrest 
```

# Vue.js

* 需要axios的支持

* 在main.js文件中引入：
```javascript
import { AttLoader } from 'attrest'; 
```

* 在main.js中写入如下代码进行全局加载,用于将API及其对象挂载到Vue对象上
```javascript
  //# 加载客户端
  var loader = new AttLoader();
  //# 挂载AttRest客户端 
  loader.VueClient(Vue, "https://localhost:5001/[yourapi]", Axios, client => { 
    //# 统一捕获请求异常 
    client.ErrorCatch = function(error, name) { 
            console.log(name, error);
        } 
    //# 统一捕获请求 
    client.Before = function() { 
        } 
    //# 然后才加载Vue 
    new Vue({
        render: h => h(App)
    }).$mount('#app'); 
}); 
```
* 在Vue的组件(Component)中直接使用this调用
```javascript
  created(){
    console.log("API接口:",this.$api);
    console.log("实体对象:",this.$entity);
    console.log("枚举对象:",this.$enum);
    //测试调用
    this.$api.AttTest_Att.GetId(12,function(d){
       console.log("调用",d.data);
    });
  }
```

# React.js
* 需要axios的支持
* 在App.js文件中引入：
```javascript
import { AttLoader } from 'attrest'; 
```
* 修改function App()方法，加入如下代码，将React对象传给AttRest：
```javascript
//# 加载客户端
var loader = new AttLoader();
//# 挂载AttRest客户端
loader.ReactClient(React,"https://localhost:5001/AttTest/api/att/getvue",axios,client=>{
        //# 统一捕获请求异常
        client.ErrorCatch = function(error,name){
          console.log(name,error);
        }
        //# 统一捕获请求
        client.Before = function(){
    
        }
});
```

* 在React的组件(Component)中直接使用React.*调用
```javascript
 class TestComponent extends React.Component{
    testApi()
    {
        console.log("API接口:",React.$api);
        console.log("实体对象:",React.$entity);
        console.log("枚举对象:",React.$enum);
        //测试调用
        React.$api.AttTest_Att.GetId(12,function(d){
           console.log("调用",d.data);
        });
    }
}
```

# Angular2 (TypeScript)
* 需要axios的支持
* 需要添加依赖文件:
```javascript
  "files": [
    "./node_modules/attrest/AttLoader.ts"
  ],
```

* 在main.ts中引用ts模块:
```javascript
   import {AttLoader} from 'attrest/AttLoader'
```
* 在main.ts中全局加载api结构:
```javascript
    //初始化AttRest客户端
    AttLoader.Init("https://localhost:5001/AttTest/api/att/getvue",function(){
      //将Angular的原始起始方法置于回调中
      platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
    },axios);
```
* 在Angular的组件中调用接口
```javascript
export class AppComponent {
  title = 'AngularApi';
  constructor(){
    console.log(AttLoader.api);
    console.log(AttLoader.enum);
    console.log(AttLoader.entity);
    AttLoader.api.AttTest_Att.GetId(1,function(d) {
      console.log(d);
    });
  }
}
```

# Jquery
* Jquery 由于比较古老，不需要使用npm的包进行加载，直接引用服务端暴露的接口,使用script标签，即可直接引入使用

+ **例如:**
```javascript
    <script src="https://localhost:5001/[yourapi]"></script> 
```
* 直接附加到jquery
```javascript
    $(document).ready(function() { 
      var client = new AttClient(); 
      client.JQuery($); 
      console.log($.api); 
    }); 
```
