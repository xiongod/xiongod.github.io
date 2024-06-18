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

// 将一个数组存储到cookie中（播放时间）
function setPlayTimeWithArray(name, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100年后的时间
    const expires = "; expires=" + date.toUTCString(); // UTC格式的过期时间
    //var cookieValue = JSON.stringify(array); // 将数组转换为JSON字符串
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // 写入cookie，并对值进行编码
}

// 从cookie中读取并解析数组（播放时间）
function getPlayTimeWithArray(name) {
    const cookieValue = "; " + document.cookie;
    const parts = cookieValue.split("; " + name + "=");
    if (parts.length === 2) {
        return parts[1]; // 解析并返回数组
    }
    return ""; // 如果没有找到cookie，返回null
}

// 新增或者更新播放时间
function setPlayTimeToCookie(musicId, playTime){
    //首先将已经存的cookie取出来
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // 如果为空则新增一个map，如果不为空，则解析map
    if (null  == playTimeStr || playTimeStr == ""){
        playTimeMap = new Map();
        playTimeMap.set(musicId, playTime);
    }else{
        let playTimeList = JSON.parse(playTimeStr);
        playTimeMap = new Map(playTimeList);
        playTimeMap.set(musicId, playTime);
    }
    // 将map存入cookie中
    setPlayTimeWithArray("playTime", JSON.stringify(Array.from(playTimeMap.entries())));
}

// 删除已经播放完成的音频的cookie
function deletePlayTimeToCookie(musicId){
    //首先将已经存的cookie取出来
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // 如果为空则新增一个map，如果不为空，则解析map
    if (null  == playTimeStr || playTimeStr == ""){
        // 不做处理
    }else{
        let playTimeList = JSON.parse(playTimeStr);
        playTimeMap = new Map(playTimeList);
        playTimeMap.delete(musicId);
    }
    // 将map存入cookie中
    setPlayTimeWithArray("playTime", JSON.stringify(Array.from(playTimeMap.entries())));
}

// 获取当前音频播放到了的时间
function getPlayTimeToCookie(musicId){
    //首先将已经存的cookie取出来
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // 如果为空则新增一个map，如果不为空，则解析map
    if (null  == playTimeStr || playTimeStr == ""){
        return 0
    }else{
        let playTimeList = JSON.parse(playTimeStr);
        playTimeMap = new Map(playTimeList);
        var time = playTimeMap.get(musicId);
        if (null == time){
            return 0
        }else{
            return time
        }
    }
}