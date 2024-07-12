from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *

class worksAdmin(admin.ModelAdmin):
    def show_desc(self,obj):
        return mark_safe(f'<div style="width: 1px;width: fit-content;text-align:justify;max-width: 400px;white-space: break-spaces;">{obj.desc}</div>')
    show_desc.short_description = 'description'
    def show_img(self,obj):
        return mark_safe(f'<div style="width:75px;height:75px;display:flex;justify-content:center;align-items:center;overflow:hidden;border-radius:50%"><img style="min-width: 40px" src="{obj.img.url}"></div>')
    list_display = ('pk','show_img','title','show_desc','href')
    list_display_links = ('pk','show_img','title','show_desc','href')
admin.site.register(works,worksAdmin)
admin.site.register(WorksTitle)