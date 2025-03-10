"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from home import views 

urlpatterns = [
     path('login/',views.user_login,name='login'),
     path('register/',views.user_registration,name='user_registration'),
     path('home/',views.get_transcript_by_chapters,name='get_transcript_by_chapters'),
     path('summary/',views.summary,name='summary'),
     path('QandA/',views.question,name='question'),
     path('assessment/',views.assessment,name='assessment'),
]
