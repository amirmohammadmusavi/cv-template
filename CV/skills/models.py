from django.db import models
from tinymce.models import HTMLField
import jdatetime


class SkillsTitle(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    tid = models.CharField(max_length=255,verbose_name='شناسه شخصی ( id )')
    class Meta:
        verbose_name_plural = 'عنوان این قسمت'
    def __str__(self):
        return  self.title

class Skills(models.Model):
    title = models.CharField(max_length=255,verbose_name="عنوان")
    desc = HTMLField(verbose_name="توضیحات")
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'مهارت ها'
    def __str__(self):
        return  self.title