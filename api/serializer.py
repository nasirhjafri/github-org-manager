from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings


from api.util import verify_github_code, get_or_create_user


User = settings.AUTH_USER_MODEL


class AuthSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=200)

    @classmethod
    def get_token(cls, user):
        return RefreshToken.for_user(user)

    def validate(self, attrs):
        data = super().validate(attrs)
        code = data['code']
        raw_user = verify_github_code(code)
        user = get_or_create_user(raw_user['access_token'])
        refresh = self.get_token(user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        return data
