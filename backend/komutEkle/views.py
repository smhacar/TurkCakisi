from rest_framework import viewsets
from .models import Command
from .serializers import CommandSerializer

# Create your views here.
class CommandViewSet(viewsets.ModelViewSet):
    queryset = Command.objects.all()
    serializer_class = CommandSerializer