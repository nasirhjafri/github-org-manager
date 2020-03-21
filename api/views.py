from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.serializer import AuthSerializer
from api.util import verify_github_code


class AuthView(APIView):
    def post(self, request):
        serializer = AuthSerializer(data=request.data)
        if serializer.is_valid():
            code = serializer.validated_data['code']
            user = verify_github_code(code)
            return Response(user.json(), status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self):
        pass
