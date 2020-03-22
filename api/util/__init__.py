import requests

from django.conf import settings

from github import Github

from api.models import User

GH_ACCESS_TOKEN_URL = 'https://github.com/login/oauth/access_token'
headers = {'Accept': 'application/json'}


def get_or_create_user(access_token):
    g = Github(access_token)
    gu = g.get_user()
    user, created = User.objects.get_or_create(username=gu.login)
    user.email = gu.email
    user.access_token = access_token
    user.save()
    return user


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
