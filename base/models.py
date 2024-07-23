from django.db import models
from colorfield.fields import ColorField
from tinymce.models import HTMLField

class SiteDetailsModel(models.Model):
    logo = models.FileField(upload_to="sitedetails/", verbose_name="لوگو",blank=True,null=True)
    main_color = ColorField(format="hexa",default='#687eff',verbose_name="رنگ اصلی",blank=True,null=True)
    second_color = ColorField(format="hexa",default='#98e4ff',verbose_name="رنگ مکمل",blank=True,null=True)
    third_color = ColorField(format="hexa",default='#292929',verbose_name="رنگ سوم",blank=True,null=True)
    header_inner_title = ColorField(format="hexa",default='#292929',verbose_name="رنگ عناوین هدر",blank=True,null=True)
    meta_copyright = models.CharField(max_length=255,verbose_name="متا کپی رایت",help_text="owner name, domain address(example.com)",blank=True,null=True)
    theme_color = ColorField(format="hexa",default='#687eff',verbose_name="رنگ آدرس بار مرورگر",blank=True,null=True)
    copyright = models.CharField(max_length=255,verbose_name="کپی رایت فوتر",blank=True,null=True)
    site_title = models.CharField(max_length=255,verbose_name="عنوان سایت")
    description = models.TextField(max_length=500,verbose_name="توضیحات سایت")
    og_image = models.ImageField(upload_to="sitedetails/",verbose_name='عکس به هنگام اشتراک گذاری',blank=True,null=True)
    og_description = models.TextField(max_length=500,verbose_name='توضیحات به هنگام اشتراک گذاری',blank=True,null=True)
    og_title = models.CharField(max_length=255,verbose_name='عنوان به هنگام اشتراک گذاری',blank=True,null=True)
    site_url = models.URLField(max_length=500,verbose_name='آدرس سایت',blank=True,null=True)
    fav_icon = models.ImageField(upload_to="sitedetails/", verbose_name="fav icon",help_text="آیکونی که آدرس بار مرورگر کنار عنوان سایت نمایش داده میشود - size: 180*180.png",blank=True,null=True)
    fav_icon2 = models.ImageField(upload_to="sitedetails/", verbose_name="fav icon",help_text="size: 32*32.png",blank=True,null=True)
    fav_icon3 = models.ImageField(upload_to="sitedetails/", verbose_name="fav icon",help_text="size: 16*16.png",blank=True,null=True)
    fa = models.BooleanField(default=True,verbose_name="آیا زبان فارسی نمایش داده شود؟")
    de = models.BooleanField(default=True,verbose_name="آیا زبان آلمانی نمایش داده شود؟")
    en = models.BooleanField(default=True,verbose_name="آیا زبان اینگیلیسی نمایش داده شود؟")

    class Meta:
        verbose_name_plural = 'تنظیمات'
    def __str__(self):
        return  'تنظیمات وب سایت'
    
class menuModel(models.Model):
    title = models.CharField(max_length=155,verbose_name='غنوان')
    href = models.CharField(max_length=255,verbose_name='پیوند')


    class Meta:
        verbose_name_plural = 'منو'

class Contact(models.Model):
    class Meta:
        verbose_name = 'تماس'
        verbose_name_plural = 'تماس'
    Name = models.CharField(max_length=300,verbose_name="نام و نام خانوادگی")
    Phone = models.CharField(max_length=20,verbose_name="شماره تلفن همراه")
    Text = models.CharField(max_length=2000,verbose_name="متن گزارش")
    File = models.FileField(upload_to="UserReports/", verbose_name="فایل ضمیمه",null=True,blank=True)
    Date = models.DateTimeField(auto_now_add=True,verbose_name="زمان ارسال",null=True)

    def __str__(self):
        return "از طرف {} به شماره تلفن {}".format(self.Name,self.Phone)
    