function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  if (isMobileDevice()) {
    window.location.href = 'https://xunhang-website.github.io/Limit/';
  }

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if ((username === '119' && password === '119')||
        (username === '2111111315' && password === '2111111315')||
        (username === '2210800119' && password === '2210800119')||
        (username === '2110800121' && password === '2110800121')||
        (username === '2111351127' && password === '2111351127')||
        (username === '2211141109' && password === '2211141109')||
        (username === '2211641225' && password === '2211641225')||
        (username === '2110311227' && password === '2110311227')||
        (username === '2310800220' && password === '2310800220')||
        (username === '2310712415' && password === '2310712415'))
    {
        window.location.href = 'https://xunhang-website.github.io/Home/';
        return false;}
    else if (username === '2211121225' && password === '2211121225')// 余卓航
    {
        window.location.href = 'https://xunhang-website.github.io/YuZhuohang/';
        return false;}
    else if (username === '2210700212' && password === '2210700212')// 林安琪
    {
        window.location.href = 'https://xunhang-website.github.io/LinAnqi/';
        return false;}
    else {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('errorMessage').innerText = '账号或密码错误';
    }
}
