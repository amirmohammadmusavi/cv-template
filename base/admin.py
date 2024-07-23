from django.contrib import admin
from .models import *
admin.site.register(SiteDetailsModel)
admin.site.register(menuModel)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('pk','Name','Phone','Date')

admin.site.register(Contact,ContactAdmin)