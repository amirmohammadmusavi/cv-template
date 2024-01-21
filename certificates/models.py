from django.db import models
import jdatetime

class certificatestitle(models.Model):
    title = models.CharField(max_length=155,verbose_name='عنوان')
    tid = models.CharField(max_length=255,verbose_name='شناسه شخصی ( id )')
    class Meta:
        verbose_name_plural = 'عنوان این قسمت'
    def __str__(self):
        return  self.title

class certificates(models.Model):
    img = models.ImageField(upload_to="certificates/", verbose_name="تصویر",help_text="jpg, size: 320*240",blank=True, null=True)
    title = models.CharField(max_length=255,verbose_name="عنوان")
    loc = models.CharField(max_length=155,verbose_name="موقعیت مکانی")
    date = models.CharField(max_length=55,verbose_name="تاریخ")
    pdate = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'گواهینامه ها'
