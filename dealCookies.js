// 将一个数组存储到cookie中
function setCookieWithArray(name, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100年后的时间
    const expires = "; expires=" + date.toUTCString(); // UTC格式的过期时间
    //var cookieValue = JSON.stringify(array); // 将数组转换为JSON字符串
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // 写入cookie，并对值进行编码
}

// 从cookie中读取并解析数组
function getCookieWithArray(name) {
    const cookieValue = "; " + document.cookie;
    const parts = cookieValue.split("; " + name + "=");
    if (parts.length === 2) {
        return parts[1]; // 解析并返回数组
    }
    return ""; // 如果没有找到cookie，返回null
}

