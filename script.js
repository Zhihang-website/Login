function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  if (isMobileDevice()) {
    window.location.href = 'https://xunhang-website.github.io/Limit/';
  }

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === '119' && password === '119'))
    {
        window.location.href = 'https://xunhang-website.github.io/Home/';
        return false;}
    else if (username === '2211121225' && password === '2211121225')// 余卓航
    {
        window.location.href = 'https://xunhang-website.github.io/YuZhuohang/';
        return false;}
    else if (username === '2111111315' && password === '2111111315')// 宋思成
    {
        window.location.href = 'https://xunhang-website.github.io/SongSicheng/';
        return false;}
    else if (username === '2210800119' && password === '2210800119')// 吴静冉
    {
        window.location.href = 'https://xunhang-website.github.io/WuJingran/';
        return false;}    
    else if (username === '2110800121' && password === '2110800121')// 方莹
    {
        window.location.href = 'https://xunhang-website.github.io/FangYing/';
        return false;}     
    else if (username === '2210700212' && password === '2210700212')// 林安琪
    {
        window.location.href = 'https://xunhang-website.github.io/LinAnqi/';
        return false;}
    else if (username === '2111351127' && password === '2111351127')// 陈馨语
    {
        window.location.href = 'https://xunhang-website.github.io/ChenXinyu/';
        return false;}
    else if (username === '2211141109' && password === '2211141109')// 汪嘉旺
    {
        window.location.href = 'https://xunhang-website.github.io/WangJiawang/';
        return false;}    
    else if (username === '2211641225' && password === '2211641225')// 褚艺雯
    {
        window.location.href = 'https://xunhang-website.github.io/ZheYiwen/';
        return false;}
    else if (username === '2110311227' && password === '2110311227')// 张悦
    {
        window.location.href = 'https://xunhang-website.github.io/ZhangYue/';
        return false;}
    else if (username === '2310800220' && password === '2310800220')// 蔡雅静
    {
        window.location.href = 'https://xunhang-website.github.io/CaiYajing/';
        return false;}
    else if (username === '2310712415' && password === '2310712415')// 闵佳怡
    {
        window.location.href = 'https://xunhang-website.github.io/MinJiayi/';
        return false;}    
    else {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('errorMessage').innerText = '账号或密码错误';
    }
}
