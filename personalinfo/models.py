from django.db import models
from tinymce.models import HTMLField
import jdatetime

class PersonalDesc(models.Model):
    img = models.ImageField(upload_to="personal/", verbose_name="تصویر شخصی",help_text="png, size: 320*530")
    name = models.CharField(max_length=255,verbose_name="عنوان توضیحات",help_text='ترجیحا نام و نام خانوادگی')
    position = models.CharField(max_length=355,verbose_name="سمت, موقعیت کاری",blank=True,null=True)
    desc = HTMLField(verbose_name="توضیحات")
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'توضیحات شخصی'

class Social(models.Model):
    name = models.CharField(max_length=255,verbose_name="عنوان توضیحات",help_text='عنوان')
    img = models.ImageField(upload_to="Social/", verbose_name="تصویر",help_text="png, size: 512*512 - The color not important because the program itself does it")
    href = models.CharField(max_length=255,verbose_name='پیوند')
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'شبکه های اجتماعی'

class Status(models.Model):
    desc = HTMLField(verbose_name="توضیحات")
    date = models.CharField(max_length=255,default=jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S"),verbose_name="تاریخ انتشار")

    class Meta:
        verbose_name_plural = 'وضعیت ها'
