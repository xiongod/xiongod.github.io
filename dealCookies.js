// ��һ������洢��cookie��
function setCookieWithArray(name, cookieValue) {
    var date = new Date();
    date.setTime(date.getTime() + (100*365 * 24 * 60 * 60 * 1000)); // 100����ʱ��
    var expires = "; expires=" + date.toUTCString(); // UTC��ʽ�Ĺ���ʱ��
    //var cookieValue = JSON.stringify(array); // ������ת��ΪJSON�ַ���
    document.cookie = name + "=" + encodeURIComponent(cookieValue) + expires + "; path=/"; // д��cookie������ֵ���б���
}

// ��cookie�ж�ȡ����������
function getCookieWithArray(name) {
    var cookieValue = "; " + document.cookie;
    var parts = cookieValue.split("; " + name + "=");
    if (parts.length == 2) {
        return parts[1]; // ��������������
    }
    return ""; // ���û���ҵ�cookie������null
}

// ʾ���÷�
// setCookieWithArray("myRead", ReadList, 100 * 365); // ����cookie������ʱ��Ϊ100��

// �Ժ�����Ҫ��ʱ���ȡcookie
// var retrievedArray = getCookieWithArray("myArrayCookie");
// if (retrievedArray) {
//     console.log(retrievedArray); // �����[1, 2, 3, 4, 5]
// } else {
//     console.log("Cookie not found or empty.");
// }

// �Ѷ����б�
const ReadList=[]