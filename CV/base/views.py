from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse,HttpResponse
from django.contrib.auth.models import User
from .models import SiteDetailsModel,menuModel
from personalinfo.models import PersonalDesc, Social, Status
from skills.models import Skills, SkillsTitle
from resume.models import Resume,Resumetitle
from certificates.models import certificates, certificatestitle
from articles.models import articles, articlestitle
from works.models import works, WorksTitle
import jdatetime


def HomeView(request):
    context = {
        'base_info': SiteDetailsModel.objects.first(),
        'menu': menuModel.objects.all(),
        'PersonalDesc': PersonalDesc.objects.first(),
        'social': Social.objects.all(),
        'Status':Status.objects.all(),
        'SkillsTitle': SkillsTitle.objects.first(),
        'skills':Skills.objects.all(),
        'ResumeTitle': Resumetitle.objects.first(),
        'resume': Resume.objects.all(),
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