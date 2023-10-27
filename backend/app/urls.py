from django.urls import path
from . import views

urlpatterns = [
    path('', views.maintenance, name='maintenance'),
    path('index', views.index, name='index'),
   
    
    ]