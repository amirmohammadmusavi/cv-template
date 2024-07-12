from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *

class ResumeAdmin(admin.ModelAdmin):
    def show_desc(self,obj):
        return mark_safe(obj.desc)
    show_desc.short_description = 'description'
    list_display = ('pk','title','show_desc','loc','year','date')

admin.site.register(Resume,ResumeAdmin)
admin.site.register(Resumetitle)