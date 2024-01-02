from django.db import models
from tinymce.models import HTMLField
import jdatetime

class WorksTitle(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    tid = models.CharField(max_length=255,verbose_name='شناسه شخصی ( id )')
    class Meta:
        verbose_name_plural = 'عنوان این قسمت'
    def __str__(self):
        return  self.title

class works(models.Model):
    img = models.ImageField(upload_to="certificates/", verbose_name="تصویر",help_text="jpg, size: 320*240",blank=True, null=True)
    title = models.CharField(max_length=255,verbose_name="عنوان")
    desc = HTMLField(verbose_name="توضیحات")
    href = models.CharField(max_length=255,verbose_name='پیوند')
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'نمونه کار ها'
