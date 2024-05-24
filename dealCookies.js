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

