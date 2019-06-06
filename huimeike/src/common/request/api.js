import requestURL from './requestURL.js'
import request from './fetch.js'
/**
 * 请求API
 */
export default {
    /**
     * 
     * @param {*} 获取数据可以不入参
     */
    // 获取短信验证码接口请求
    getcode: async function (prams) {
        let response = await request.Fetch(requestURL.getcode,prams,'POST',false)
        return response;
    },
	//选择身份接口
	getid: async function (prams) {
        let response = await request.Fetch(requestURL.getid,prams,'POST',false)
        return response;		
	},
	//点击注册接口
	register: async function (prams) {
        let response = await request.Fetch(requestURL.register,prams,'POST',false)
        return response;		
	},
	//点击登陆接口
	login: async function (prams) {
	    let response = await request.Fetch(requestURL.login,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码接口
	forgot: async function (prams) {
	    let response = await request.Fetch(requestURL.forgot,prams,'POST',true,false)
	    return response;		
	},
	//忘记密码获取验证码接口
	forgotcode: async function (prams) {
	    let response = await request.Fetch(requestURL.forgotcode,prams,'POST',true)
	    return response;		
	},
	//两个轮播图接口
	banner: async function (prams) {
	    let response = await request.Fetch(requestURL.banner,prams,'POST',true)
	    return response;		
	},
	//首页数据
	index: async function (prams) {
	    let response = await request.Fetch(requestURL.index,prams,'POST',true)
	    return response;		
	},
	//首页商品
	indexShop: async function (prams) {
		let response = await request.Fetch(requestURL.indexShop,prams,'POST',true)
		return response;		
	},
	//云课堂接口
	cloudClass: async function (prams) {
		let response = await request.Fetch(requestURL.cloudClass,prams,'POST',true)
		return response;		
	},
	//云课堂接口
	NotPurchased: async function (prams) {
		let response = await request.Fetch(requestURL.NotPurchased,prams,'POST',true)
		return response;		
	},
	//云课堂接口
	play: async function (prams) {
		let response = await request.Fetch(requestURL.play,prams,'POST',true)
		return response;		
	}	
}