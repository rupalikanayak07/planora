from django.urls import path
from .views import *

urlpatterns=[
    path('login/',login_),
    path('register/',register),
    
]