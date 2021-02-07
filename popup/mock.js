Mock.mock('ystmo://?schema=cameraYst...&','get',{
    id: "@id()",
    username: "@cname()",
    date:"@date()",
    avatar:"@image('200x200','red','#fff','avatar')",
    description:"@paragraph()",
    ip:"@ip()",
    email:"@email()",
    city:"@city"
}
)



//获取访问'ystmo://?schema=cameraYst...&'的get请求，返回id、username...模拟数据。