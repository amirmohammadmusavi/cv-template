from django.db import models
import jdatetime

class articlestitle(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    tid = models.CharField(max_length=255,verbose_name='شناسه شخصی ( id )')
    class Meta:
        verbose_name_plural = 'عنوان این قسمت'
    def __str__(self):
        return  self.title

class articles(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    href = models.CharField(max_length=255,verbose_name='پیوند')
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'مقالات'
    def __str__(self):
        return  self.title
