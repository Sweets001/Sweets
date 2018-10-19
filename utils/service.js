// 正式api
//  var API_URL = 'https://www.youyubang.cn/salesapi/api';
// 开发api
// var API_URL = 'https://api.spacloud.cn/salesapi/api';
var hasModal = false; // 是否已经提示过账号已过期
function config() {
  var token = wx.getStorageSync('token');
  return {
    token: token
  }
}
// var config = (function(){
//   var token = '';
//   function setToken(val){
//     token = val;
//   }
//   return {
//     token: token,
//     setToken: setToken
//   }
// })()
function getCurrentRoute() {
  wx.hideLoading();
  hasModal = true;
  var returnUrl = 'login/login';
  var pages = getCurrentPages();
  var currentPage = pages[pages.length - 1].route
  var count = 0;
  for (var i = 0; i < currentPage.length; i++) {
    if (currentPage[i] == '/') {
      count++;
    }
  }
  switch (count) {
    case 2:
      returnUrl = '../' + returnUrl;
      break;
    case 3:
      returnUrl = '../../' + returnUrl;
      break;
    case 4:
      returnUrl = '../../../' + returnUrl;
      break;
  }
  wx.showModal({
    title: '',
    showCancel: false,
    content: '账号已过期，请重新登录',
    success: function (res) {
      if (res.confirm) {
        hasModal = false;
        wx.reLaunch({
          url: returnUrl
        });
      } else {
        hasModal = false;
      }
    }
  });
  return returnUrl;
}
// get
function get(path, successFn, failFn, noToken) {
  var API_URL = getApp().API_URL + 'api';
  var url = '';
  if (noToken) {
    url = API_URL + path;
  } else {
    url = API_URL + path + '/' + config().token;
  }
  if (url.indexOf('api.spacloud') != -1) {
    console.log('GET:'+url);
  }
  wx.request({
    method: 'GET',
    url: url,
    success: function (data) {
      if (data.data.ret == 401 && !hasModal) {
        getCurrentRoute();
        return;
      }
      if (successFn) {
        successFn(data.data);
      }
    },
    fail: function (err) {
      if (failFn) {
        failFn(err);
      }
    }
  })
}

// post
function post(path, param, successFn, failFn, noToken) {
  var API_URL = getApp().API_URL + 'api';
  let url = '';
  if (noToken) {
    url = API_URL + path;
  } else {
    url = API_URL + path + '/' + config().token;
  }
  if (url.indexOf('api.spacloud') != -1) {
    console.log('POST:' + url);
  }
  wx.request({
    method: 'POST',
    data: param || {},
    url: url,
    success: function (data) {
      if (data.data.ret == 401 && !hasModal) {
        getCurrentRoute();
        return;
      }
      if (successFn) {
        successFn(data.data);
      }
    },
    fail: function (err) {
      if (failFn) {
        failFn(err);
      }
    }
  })
}

// put
function put(path, param, successFn, failFn, noToken) {
  var API_URL = getApp().API_URL + 'api';
  let url = '';
  if (noToken) {
    url = API_URL + path;
  } else {
    url = API_URL + path + '/' + config().token;
  }
  if (url.indexOf('api.spacloud') != -1) {
    console.log('PUT:' + url);
  }
  wx.request({
    method: 'PUT',
    data: param || {},
    url: url,
    success: function (data) {
      if (data.data.ret == 401 && !hasModal) {
        getCurrentRoute();
        return;
      }
      if (successFn) {
        successFn(data.data);
      }
    },
    fail: function (err) {
      if (failFn) {
        failFn(err);
      }
    }
  })
}
// delete
function del(path, successFn, failFn, noToken) {
  var API_URL = getApp().API_URL + 'api';
  let url = '';
  if (noToken) {
    url = API_URL + path;
  } else {
    url = API_URL + path + '/' + config().token;
  }
  if (url.indexOf('api.spacloud') != -1) {
    console.log('DELETE:' + url);
  }
  wx.request({
    method: 'DELETE',
    url: url,
    success: function (data) {
      if (data.data.ret == 401 && !hasModal) {
        getCurrentRoute();
        return;
      }
      if (successFn) {
        successFn(data.data);
      }
    },
    fail: function (err) {
      if (failFn) {
        failFn(err);
      }
    }
  })
}
// deleteObj
function delObj(path, params, successFn, failFn, noToken) {
  var API_URL = getApp().API_URL + 'api';
  let url = '';
  if (noToken) {
    url = API_URL;
  } else {
    url = API_URL + path + '/' + config().token;
  }
  if (url.indexOf('api.spacloud') != -1) {
    console.log('DELETE(obj):' + url);
  }
  wx.request({
    method: 'DELETE',
    url: url,
    data: params || {},
    success: function (data) {
      if (data.data.ret == 401 && !hasModal) {
        getCurrentRoute();
        return;
      }
      if (successFn) {
        successFn(data.data);
      }
    },
    fail: function (err) {
      if (failFn) {
        failFn(err);
      }
    }
  })
}
module.exports = {
  get: get,
  post: post,
  put: put,
  del: del,
  delObj: delObj,
}