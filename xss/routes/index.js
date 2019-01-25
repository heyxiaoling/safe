var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//关掉浏览器xss拦截
	res.set('X-XSS-Protection',0);
  	res.render('index', { title: 'Express',xss:req.query.xss });
});
/*
* 存储型XSS
router.get('/aaa', function(req, res, next) {
	//关掉浏览器xss拦截
	res.set('X-XSS-Protection',0);
  	res.render('index', { title: 'Express',xss:sql() }); //从缓存或者数据库等读取
});
*/

module.exports = router;
