import re
import requests

import get_token


url = "https://www.acfun.cn/"
headers = {
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, "
        "like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "Cookie":
        "csrfToken=" + get_token()
}
response = requests.get(url, headers=headers)
if response.status_code == 200:
    pattern = r'bigPipe\.onPageletArrive\((.*?)\);'
    matchs = re.findall(pattern, response.text,
                        re.DOTALL)  # re.DOTALL 使得 . 可以匹配换行符
    for match in matchs:
        print(match)
        pass
else:
    print(
        f'Failed to retrieve the webpage. Status code: {response.status_code}')
