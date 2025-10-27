# video/models.py
from django.db import models
import os

def video_upload_path(instance, filename):
    return f"original_videos/{filename}"

class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    video_file = models.FileField(upload_to=video_upload_path)
    hls_path = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def get_m3u8_url(self):
        if self.hls_path:
            return f"/media/hls_videos/{self.hls_path}/output.m3u8"
        return ""
