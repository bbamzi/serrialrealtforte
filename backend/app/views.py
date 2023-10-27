from django.shortcuts import render
import os

# Create your views here.

def index(request):
    gmap_key = os.getenv("gmap_key")
    return render(request, 'index.html', {'gmap_key': gmap_key})


def maintenance(request):
    return render(request, 'maintenance.html')
