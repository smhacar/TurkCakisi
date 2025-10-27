# video/serializers.py
from rest_framework import serializers
from .models import Video

class VideoSerializer(serializers.ModelSerializer):
    m3u8_url = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'video_file', 'm3u8_url']

    def get_m3u8_url(self, obj):
        return obj.get_m3u8_url()
