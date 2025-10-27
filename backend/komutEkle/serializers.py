from rest_framework import serializers
from .models import Command

class CommandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Command
        fields = ['id', 'title', 'command', 'slug']
        read_only_fields = ['slug'] 