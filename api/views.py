from rest_framework_simplejwt.views import TokenViewBase

from api.serializer import AuthSerializer


class AuthView(TokenViewBase):
    serializer_class = AuthSerializer

