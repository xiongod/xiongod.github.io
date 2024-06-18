// ��һ������洢��cookie��
function setCookieWithArray(name, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100����ʱ��
    const expires = "; expires=" + date.toUTCString(); // UTC��ʽ�Ĺ���ʱ��
    //var cookieValue = JSON.stringify(array); // ������ת��ΪJSON�ַ���
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // д��cookie������ֵ���б���
}

// ��cookie�ж�ȡ����������
function getCookieWithArray(name) {
    const cookieValue = "; " + document.cookie;
    const parts = cookieValue.split("; " + name + "=");
    if (parts.length === 2) {
        return parts[1]; // ��������������
    }
    return ""; // ���û���ҵ�cookie������null
}

// ��һ������洢��cookie�У�����ʱ�䣩
function setPlayTimeWithArray(name, cookieValue) {
    const date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100����ʱ��
    const expires = "; expires=" + date.toUTCString(); // UTC��ʽ�Ĺ���ʱ��
    //var cookieValue = JSON.stringify(array); // ������ת��ΪJSON�ַ���
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // д��cookie������ֵ���б���
}

// ��cookie�ж�ȡ���������飨����ʱ�䣩
function getPlayTimeWithArray(name) {
    const cookieValue = "; " + document.cookie;
    const parts = cookieValue.split("; " + name + "=");
    if (parts.length === 2) {
        return parts[1]; // ��������������
    }
    return ""; // ���û���ҵ�cookie������null
}

// �������߸��²���ʱ��
function setPlayTimeToCookie(musicId, playTime){
    //���Ƚ��Ѿ����cookieȡ����
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // ���Ϊ��������һ��map�������Ϊ�գ������map
    if (null  == playTimeStr || playTimeStr == ""){
        playTimeMap = new Map();
        playTimeMap.set(musicId, playTime);
    }else{
        let playTimeList = JSON.parse(playTimeStr);
        playTimeMap = new Map(playTimeList);
        playTimeMap.set(musicId, playTime);
    }
    // ��map����cookie��
    setPlayTimeWithArray("playTime", JSON.stringify(Array.from(playTimeMap.entries())));
}

// ɾ���Ѿ�������ɵ���Ƶ��cookie
function deletePlayTimeToCookie(musicId){
    //���Ƚ��Ѿ����cookieȡ����
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // ���Ϊ��������һ��map�������Ϊ�գ������map
    if (null  == playTimeStr || playTimeStr == ""){
        // ��������
    }else{
        let playTimeList = JSON.parse(playTimeStr);
        playTimeMap = new Map(playTimeList);
        playTimeMap.delete(musicId);
    }
    // ��map����cookie��
    setPlayTimeWithArray("playTime", JSON.stringify(Array.from(playTimeMap.entries())));
}

// ��ȡ��ǰ��Ƶ���ŵ��˵�ʱ��
function getPlayTimeToCookie(musicId){
    //���Ƚ��Ѿ����cookieȡ����
    var  playTimeStr = getPlayTimeWithArray("playTime")
    let playTimeMap = null
    // ���Ϊ��������һ��map�������Ϊ�գ������map
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