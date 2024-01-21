from modeltranslation.translator import translator, TranslationOptions
from .models import *

class ResumeTranslationOptions(TranslationOptions):
    fields = ('title', 'desc','loc','year')

translator.register(Resume, ResumeTranslationOptions)