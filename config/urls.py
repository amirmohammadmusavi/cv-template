from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from django.conf.urls.i18n import i18n_patterns
from base.views import change_language

urlpatterns = [
    
    path('change_language', change_language, name="change_language"),
    
]
urlpatterns += i18n_patterns(
    path('admin/', admin.site.urls),
	path('', include('base.urls')),
    path('ai/', include('ai_chat.urls')),
)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)