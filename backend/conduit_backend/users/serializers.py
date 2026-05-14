from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
    
    def create(self, vaildated_data):
        user = User.objects.create_user(
            username=self.validated_data['username'],
            email=self.validated_data.get('email', ''),
            password=self.validated_data['password']
        )
        return user
