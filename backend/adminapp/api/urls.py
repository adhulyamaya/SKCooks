from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('adminlogin/',AdminLoginView.as_view(),name="adminlogin"),
    path('admin-user-profile/',AdminprofileView.as_view(),name="admin-user-profile"),
    ]