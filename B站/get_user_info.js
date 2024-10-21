# Date: 2024-10-21
# author: li_yong
# 用户个人主页信息抓取

import re
import time
import hashlib
import requests


def get_mixin_key(e):
    t = []
    indices = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27,
               43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13, 37, 48,
               7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60, 51, 30, 4, 22, 25, 54,
               21, 56, 59, 6, 63, 57, 62, 11, 36, 20, 34, 44, 52]

    for r in indices:
        if r < len(e) and e[r]:  # 检查索引是否有效且字符不为空（虽然在这个情况下e[r]总是非空的，除非e是特殊字符串）
            t.append(e[r])

            # 将列表中的字符连接成一个字符串，并截取前32个字符
    result = ''.join(t)[:32]

    return result

def get_wrid():
    n = "7cd084941338484aae1ad9425b84077c"
    i = "4932caff0ff746eab6f01bf08b70ac45"
    o = get_mixin_key(n+i)
    m = "wts=" + str(round(time.time()))
    a = m+o
    md5_hash =hashlib.md5()
    md5_hash.update(a.encode('utf-8'))
    wrid = md5_hash.hexdigest()
    return wrid

def get_webid_web(url, headers):
    params = {
        "spm_id_from": "333.337.0.0"
    }
    response = requests.get(url, headers=headers, params=params)
    return response.text

def send_request(headers, webid):
    url = "https://api.bilibili.com/x/space/wbi/acc/info"
    params = {
"mid": 3493109610580914,
"token": "",
"platform": "web",
"web_location": 1550101,
"dm_img_list": [],
"dm_img_str": "V2ViR0wgMS4wIChPcGVuR0wgRVMgMi4wIENocm9taXVtKQ",
"dm_cover_img_str": "QU5HTEUgKEludGVsLCBJbnRlbChSKSBVSEQgR3JhcGhpY3MgNjAwICgweDAwMDAzMTg1KSBEaXJlY3QzRDExIHZzXzVfMCBwc181XzAsIEQzRDExKUdvb2dsZSBJbmMuIChJbnRlbC",
"dm_img_inter": '{"ds":[],"wh":[3789,6013,91],"of":[339,678,339]}',
"w_webid": webid,
"w_rid": get_wrid(),
"wts": str(round(time.time()))
}
    response = requests.get(url, headers=headers, params=params)
    print(response.status_code)
    print(response.headers)
    print(response.text)

def parsel_webid(html):
    pattern = r'.*?%22(eyJhb.*?)%'
    match = re.search(pattern, html,
                      re.DOTALL)  # re.DOTALL 使得 . 可以匹配换行符
    return match.group(1)

url = "https://space.bilibili.com/3493109610580914"
headers = {
        "authority": "space.bilibili.com",
        "method": "GET",
        "path": "/3493109610580914?spm_id_from=333.337.0.0",
        "scheme": "https",
        "Accept": "text/html",
        # "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,"
        #           "image/avif,image/webp,image/apng,*/*;q=0.8,"
        #           "application/signed-exchange;v=b3;q=0.7",
        "Accept-Encoding": "gzip, deflate, zstd",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Cache-Control": "max-age=0",
        "Cookie": "buvid3=0F479F0B-133D-BBA3-3B34-464E070C771B13046infoc; "
                  "b_nut=1729262412; "
                  "buvid4=967D43EE-1338-0ACC-EC66-FBE28185A3F013046-024101814"
                  "-JEb9JpMDeO55LIdSOzj14Q%3D%3D; "
                  "_uuid=418DE110B-10958-4BBB-67A3-C2979AD10746E15774infoc; "
                  "bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mjk1MjE2MTcsImlhdCI6MTcyOTI2MjM1NywicGx0IjotMX0.OQRACkEG0gBHU8Ff1nipM1pYqwi7dvIO9ny_6XHkkwQ; bili_ticket_expires=1729521557; buvid_fp=40214298a48d30c99e4c80d46bd45d87; browser_resolution=1536-686; b_lsid=3D174998_192A20AD431",
        "Priority": "u=0, i",
        "Sec-Ch-Ua": '"Google Chrome";v="125", "Chromium";v="125", '
                     '"Not.A/Brand";v="24"',
        "Sec-Ch-Ua-Mobile": "?0",
        "Sec-Ch-Ua-Platform": "Windows",
        "Sec-Fetch-Dest": "document",
        "Sec-Fetch-Mode": "navigate",
        "Sec-Fetch-Site": "cross-site",
        "Sec-Fetch-User": "?1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/125.0.0.0 Safari/537.36"
    }
html = get_webid_web(url, headers)
webid = parsel_webid(html)
send_request(headers, webid)
