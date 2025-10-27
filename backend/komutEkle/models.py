from django.db import models
from django.utils.text import slugify
# Create your models here.
# class Category(models.Model):
#     title = models.CharField(max_length=255)
#     slug = models.SlugField()

#     def __str__(self):
#         return self.title

class Command(models.Model):
    
    title = models.CharField(max_length=255)
    command = models.CharField(max_length=255)
    #category = models.ForeignKey(Category, related_name='commands', on_delete = models.CASCADE)
    slug = models.SlugField(unique=True, blank=True)  

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
    
    def __str__(self):
        return self.title
        
