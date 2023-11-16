from django.urls import path
from .views import get_weather, index, result

urlpatterns = [
    path('', get_weather, name='index'),
    path('weather/', index, name='weather'),
]