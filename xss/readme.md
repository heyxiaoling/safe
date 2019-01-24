## xss
#### 基本定义

* 反射型：
发出请求时，XSS代码出现在URL中，作为输入提交到服务器端，服务器端解析后响应，XSS代码随响应内容一起传回浏览器，最后浏览器解析执行XSS代码。这个过程像一次反射，故叫反射型XSS
* 存储型：
存储型XSS和反射型XSS的差别仅在于，提交的代码会存储杂服务器端（数据可，内存，文件系统等），下次请求目标页面时不用在提交xss代码

#### xss小栗子
    
[代码https://github.com/heyxiaoling/safe](https://github.com/heyxiaoling/safe)

    mkdir xss && cd xss
    express -e ./
    npm install
    npm start //localhost:3000
    
    //修改routers/index.js
    router.get('/', function(req, res, next) {
    	//关掉浏览器xss拦截
    	res.set('X-XSS-Protection',0);
      	res.render('index', { title: 'Express',xss:req.query.xss });
    });
    
    //修改ejs模板views/index.ejs
    <div>
    	<%- xss %>
    </div>
    
    //触发
    http://localhost:3000/?xss=<img src="null" onerror="alert(1)" />
    http://localhost:3000/?xss=<p onclick="alert('点我')">点我</p>
    http://localhost:3000/?xss=<iframe src="//baidu.com/t.html"></iframe>
    
