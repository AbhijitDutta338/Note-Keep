from django.shortcuts import render
from rest_framework import serializers, viewsets
from .serializers import NoteSerializer
from .models import Note
# Create your views here.

class NoteView(viewsets.ModelViewSet):
    serializer_class=NoteSerializer
    queryset=Note.objects.all()
