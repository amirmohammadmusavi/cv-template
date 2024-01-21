from modeltranslation.translator import translator, TranslationOptions
from .models import *

class articlesTranslationOptions(TranslationOptions):
    fields = ('title', )

translator.register(articles, articlesTranslationOptions)