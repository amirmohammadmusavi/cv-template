from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import *
class SkillsAdmin(admin.ModelAdmin):
    def show_desc(self,obj):
        return mark_safe(obj.desc)
    show_desc.short_description = 'description'
    list_display = ('pk','title','show_desc','date')
admin.site.register(Skills,SkillsAdmin)
admin.site.register(SkillsTitle)