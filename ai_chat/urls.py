from django.urls import path,include
from django.conf.urls.i18n import i18n_patterns
from .views import ai_chat

urlpatterns = [
    path('ai_chat/', ai_chat),
]