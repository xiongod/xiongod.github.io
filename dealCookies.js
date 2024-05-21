// 将一个数组存储到cookie中
function setCookieWithArray(name, cookieValue) {
    var date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100年后的时间
    var expires = "; expires=" + date.toUTCString(); // UTC格式的过期时间
    //var cookieValue = JSON.stringify(array); // 将数组转换为JSON字符串
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // 写入cookie，并对值进行编码
}

// 从cookie中读取并解析数组
function getCookieWithArray(name) {
    var cookieValue = "; " + document.cookie;
    var parts = cookieValue.split("; " + name + "=");
    if (parts.length == 2) {
        return parts[1]; // 解析并返回数组
    }
    return ""; // 如果没有找到cookie，返回null
}

// 示例用法
// setCookieWithArray("myRead", ReadList, 100 * 365); // 设置cookie，过期时间为100年

// 稍后在需要的时候读取cookie
// var retrievedArray = getCookieWithArray("myArrayCookie");
// if (retrievedArray) {
//     console.log(retrievedArray); // 输出：[1, 2, 3, 4, 5]
// } else {
//     console.log("Cookie not found or empty.");
// }

// 已读的列表
const ReadList=[]