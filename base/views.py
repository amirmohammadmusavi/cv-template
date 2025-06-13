from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse,HttpResponse,HttpResponseRedirect
from django.contrib.auth.models import User
from .models import SiteDetailsModel,menuModel,Contact
from personalinfo.models import PersonalDesc, Social, Status
from skills.models import Skills, SkillsTitle
from resume.models import Resume,Resumetitle
from certificates.models import certificates, certificatestitle
from articles.models import articles, articlestitle
from works.models import works, WorksTitle
import jdatetime
from django.contrib import messages

def HomeView(request):
    detail = SiteDetailsModel.objects.first()
    if request.LANGUAGE_CODE == 'fa' and not detail.fa:
        return redirect(f"/en")
    if request.LANGUAGE_CODE == 'de' and not detail.de:
        return redirect(f"/en")
    
    context = {
        'base_info': detail,
        'menu': menuModel.objects.all(),
        'PersonalDesc': PersonalDesc.objects.first(),
        'social': Social.objects.all(),
        'Status':Status.objects.all(),
        'SkillsTitle': SkillsTitle.objects.first(),
        'skills':Skills.objects.all(),
        'ResumeTitle': Resumetitle.objects.first(),
        'resume': Resume.objects.all().order_by("order"),
        'certificatesTitle': certificatestitle.objects.first(),
        'certificates': certificates.objects.all(),
        'articlesTitle': articlestitle.objects.first(),
        'articles': articles.objects.all(),
        'worksTitle': WorksTitle.objects.first(),
        'works': works.objects.all(),
    }
    return render(request,'base/index.html',context)

def change_language(request):
    return redirect(f"/{request.GET.get('lang')}{request.GET.get('next')}")

def get_now():
    return jdatetime.datetime.now().strftime("%a, %d %b %Y %H:%M:%S")

def ContactView(request):

    if request.method == "POST":
        if not Contact.objects.filter(Phone=request.POST.get('Phone')).count() > 5:
            try:
                content = Contact(Name=request.POST.get('Name'),
                                Text=request.POST.get('Text'),
                                Phone=request.POST.get('Phone'),
                                File=request.FILES['File'] if "File" in request.FILES else None,)
                content.save()
                messages.success(request, "Your message has been successfully sent")
            except:
                messages.error(request, "This operation was not successful")
        else:
            messages.error(request, "You have sent too many messages")

    return HttpResponseRedirect('/'+request.LANGUAGE_CODE+"/#Contact")