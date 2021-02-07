var URLStorage;

function interceptRequest(request)
{
  if(request && request.url)
  {
    if(request.type == "main_frame") // new page/site is loading in main window
    {
      if(request.url.indexOf("baidu") > -1)
      {
        URLStorage = request.url;
        return {redirectUrl: chrome.extension.getURL("options.html")};
      }
    }
  }
}

chrome.webRequest.onBeforeRequest.addListener(interceptRequest, {urls: ["*://*/*"]}, ['blocking']);

//接收请求wikipedia.org的请求，重定向，返回options.html页面。

// 格式；chrome.webRequest.onBeforeRequest.addListener(
//     callback, filter, opt_extraInfoSpec);

// chrome.webRequest.onBeforeRequest.addListener(
//     function(details) { 
//       return { cancel: true }; 
//     },
//     {urls: ["*://www.baidu.com/*"]},    //遇到*://www.baidu.com/*这种类型的，直接阻塞。
//     ["blocking"]
//   );

