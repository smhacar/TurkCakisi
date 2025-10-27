# video/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import Video
import subprocess
import os
import uuid
from django.conf import settings

FFMPEG_PATH = "C:\\ffmpeg\\bin\\ffmpeg.exe"  # senin belirlediğin path

@receiver(post_save, sender=Video)
def convert_to_hls(sender, instance, created, **kwargs):
    if created:
        input_file = instance.video_file.path
        folder_name = str(uuid.uuid4())
        output_folder = os.path.join(settings.MEDIA_ROOT, "hls_videos", folder_name)
        os.makedirs(output_folder, exist_ok=True)

        output_path = os.path.join(output_folder, "output.m3u8")

        result = subprocess.run(
            [
                FFMPEG_PATH,
                "-i", input_file,
                "-profile:v", "baseline",
                "-level", "3.0",
                "-start_number", "0",
                "-hls_time", "10",
                "-hls_list_size", "0",
                "-f", "hls",
                output_path
            ],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )

        if result.returncode != 0:
            print("FFmpeg stderr:", result.stderr)

        instance.hls_path = folder_name
        instance.save(update_fields=["hls_path"])
