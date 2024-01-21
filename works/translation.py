from modeltranslation.translator import translator, TranslationOptions
from .models import *

class worksTranslationOptions(TranslationOptions):
    fields = ('title', 'desc')

translator.register(works, worksTranslationOptions)