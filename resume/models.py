from django.db import models
from tinymce.models import HTMLField
import jdatetime

def count_works():
    return Resume.objects.all().count()

class Resumetitle(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    tid = models.CharField(max_length=255,verbose_name='شناسه شخصی ( id )')
    class Meta:
        verbose_name_plural = 'عنوان این قسمت'
    def __str__(self):
        return  self.title

class Resume(models.Model):
    title = models.CharField(max_length=255,verbose_name="عنوان")
    desc = HTMLField(verbose_name="توضیحات")
    loc = models.CharField(max_length=155,verbose_name="موقعیت مکانی")
    year = models.CharField(max_length=55,verbose_name="سال")
    order = models.IntegerField(default=count_works,blank=True,null=True,verbose_name="ترتیب نمایش در لیست")
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'سوابق کاری'