import requests
from django.conf import settings


GH_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'
headers = {'Accept': 'application/json'}


def verify_github_code(code):
    client_id = settings.GH_CLIENT_ID
    client_secret = settings.GH_CLIENT_SECRET
    redirect_uri = settings.GH_REDIRECT_URL
    data = {
        'code': code,
        'client_id': client_id,
        'client_secret': client_secret,
        'redirect_uri': redirect_uri,
    }
    return requests.post(GH_ACCESS_TOKEN_URL, data=data, headers=headers)
