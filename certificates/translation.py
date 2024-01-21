from modeltranslation.translator import translator, TranslationOptions
from .models import *

class certificatesTranslationOptions(TranslationOptions):
    fields = ('title', 'loc','date')

translator.register(certificates, certificatesTranslationOptions)