from rest_framework_simplejwt.views import TokenViewBase
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from api.serializer import AuthSerializer, UserSerializer


class AuthView(TokenViewBase):
    serializer_class = AuthSerializer


class UserApiView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
