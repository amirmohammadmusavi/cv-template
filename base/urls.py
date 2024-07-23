from django.urls import include, path
from . import views

urlpatterns = [
    path('', views.HomeView),
    path('send_msg',views.ContactView,name="contact")
]