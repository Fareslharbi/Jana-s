
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

from . import views
urlpatterns = [
    path('z', views.index, name='index'),
    path('', views.index1, name='index1'),
    path('b', views.index2, name='index2'),
    path('redirect/', views.redirect_view, name='redirect'),
    path('redirect_home/', views.redirect_view1, name='redirect_home'),
    path('redirect_shops/', views.redirect_view2, name='redirect_view2'),
    
]
