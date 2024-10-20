import requests


def get_token():
    url = "https://www.acfun.cn/"
    headers = {
    "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, "
        "like Gecko) Chrome/125.0.0.0 Safari/537.36"

}
    response = requests.get(url, headers=headers)
    if "set-cookie" in response.headers:
        set_cookie = response.headers["set-cookie"]
    if "csrfToken=" in set_cookie:
        parts = set_cookie.split("=")
        csrf_token_value = parts[1][:-6]
        return csrf_token_value
    else:
        return "csrfToken not found in the string."
