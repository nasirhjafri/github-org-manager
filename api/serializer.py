from rest_framework import serializers


class AuthSerializer(serializers.Serializer):
    code = serializers.CharField(max_length=200)
